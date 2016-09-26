
import {
  DisplayMode,
  HttpClient,
  Environment,
  EnvironmentType
} from '@microsoft/sp-client-base';

import {
  IWebPartContext
} from '@microsoft/sp-client-preview';

import {
    ISearchColumn
} from './SearchInterfaces';

import {
    IHyperSearchWebPartProps
} from './IHyperSearchWebPartProps'

import * as sp from './SPSearchInterfaces';

import MockSPRequest from './tests/MockSPRequest';
import utilities from './Utilities';
import dataSourceCreator from './DataSourceCreator';
import searchSchema from './SearchSchema';

//jquery must be 2.2.4 or lower to avoid error when kendo uses  elem.getClientRects is not a function error.
import * as $ from 'jquery';
var kendo = require('kendo/js/kendo.web.js');



//put plugin-in css here and not in xx.module.scss.ts
require('kendo/css/web/kendo.common.css')
require('kendo/css/web/kendo.common-office365.css')
require('kendo/css/web/kendo.office365.css')



export default class Search {

  private properties:IHyperSearchWebPartProps;
  private context: IWebPartContext;
  private searchSchema:any;

  public constructor(context:IWebPartContext, properties: IHyperSearchWebPartProps) {
    this.context = context;
    this.properties = properties;
    this.searchSchema = searchSchema.getSchema();

  }

  public getSearchResultsAsync(textToSearch: string) : void {

  // Test environment
  if (this.context.environment.type === EnvironmentType.Local ||
        this.context.environment.type === EnvironmentType.Test ) {
      this.getMockSearchResults(textToSearch).then((response) => {
          this.renderSearchResults(response,this.getSchemaColumns());
      });

  // SharePoint environment
  } else if (this.context.environment.type === EnvironmentType.SharePoint ||
              this.context.environment.type === EnvironmentType.ClassicSharePoint) {
      this.executeQuery(textToSearch)
          .then((response:any) => {
            let dc = new dataSourceCreator();
            let displayColumns:ISearchColumn[] = this.getSchemaColumns();
            let items = dc.convertSearchResult(response,displayColumns);
            this.renderSearchResults(items,displayColumns);
          });
    }
  }

  private executeQuery(textToSearch: string): Promise<any> {

    let queryRequest:sp.SearchRequest = {
                    'Querytext': textToSearch,
                    'RowLimit': 500,
                    'TrimDuplicates': false,
                }

    let query = {
                'request': queryRequest
            };

    return this.context.httpClient.post(this.context.pageContext.web.absoluteUrl + `/_api/search/postquery`,{
      headers:{
        "odata-version":"",
        "accept":"application/json;odata=minimalmetadata;streaming=true;charset=utf-8"
      },
      body:JSON.stringify(query)

    }).then((response: Response) => {
        if(response.ok){
            return(response.json());
        }
    },(err:any) => {
        alert(err);
    } );

  }

  private getSchemaColumns(){
       let schemaColumns:ISearchColumn[] = [];
       let displayprops = this.properties.displayprops === "" ? ['Title','Path']:JSON.parse(this.properties.displayprops);
       $.each(displayprops, (k,propKey) => {
           $.each(this.searchSchema,(k,v:ISearchColumn) => {
                if(v.Mp == propKey){
                    schemaColumns.push(v);
                }
           });
       });

       return schemaColumns;
  }

  private getGridColumns(schemaColumns:ISearchColumn[]){


    let gridColumns:any = [];

    $.each(schemaColumns,(k,v:ISearchColumn) => {
        gridColumns.push({
            filterable: true,
            sortable: true,
            groupable: false,
            field: v.Mp,
            title: v.Title,
            type: v.DataType
        });
    });


    return gridColumns;


  }
  private addImageLinkColumn(cols) {
    //check to see if path has already been added
    var pathCol = $.grep(cols, function (col:any) {
        return (col.field == "Path" && col.template);
    });

    if (!(pathCol && pathCol.length > 0)) {
        cols.unshift(
            {
                filterable: false,
                sortable: false,
                groupable: false,
                width: 40,
                field: 'Path',
                title: "&nbsp;",
                template: "<a href='#:data.FileLink#'  target='_blank' ><img  src='#:data.ImageIcon#' ></img></a>"
            });
    }


    }

    private  addPreviewLinkColumn = (cols) => {
        //check to see if preview has already been added
        var previewCol = $.grep(cols, function (col:any) {
            return (col.field == "ServerRedirectedPreviewURL" && col.template);
        });

        if (!(previewCol && previewCol.length > 0) && this.properties.preview) {
            cols.unshift(
                {
                    filterable: false,
                    sortable: false,
                    groupable: false,
                    width: 40,
                    field: 'ServerRedirectedPreviewURL',
                    title: "&nbsp;",
                    template: "<span style='cursor:pointer' id='#:data.Preview#'><i class='ms-Icon ms-Icon--picture' aria-hidden='true'></i></span>"
                });
        }


    }


  public renderSearchResults(items:any,schemaColumns:ISearchColumn[]) {

      let gridColumns:Array<any> = this.getGridColumns(schemaColumns);
      this.addImageLinkColumn(gridColumns);
      //this.addPreviewLinkColumn(gridColumns);

      var oldGrid:kendo.ui.Grid = $("#resultGrid").data("kendoGrid");
      if (oldGrid) {
          oldGrid.destroy();
          $("#resultGrid").empty();
      }

      var grid:any = $("#resultGrid").kendoGrid({
        dataSource: items,
        selectable: "row",
        groupable: false,
        height: 300,
        scrollable: true,
        resizable: true,
        reorderable: false,
        sortable: true,
        filterable: true,
        navigatable: false,
        pageable: false,
        columns: gridColumns
      }).data("kendoGrid");

      if(this.properties.preview){
        grid.table.kendoTooltip({
                filter: "td:nth-child(1)",
                position:"right",
                content: function (e) {
                    var dataItem:any = $("#resultGrid").data("kendoGrid").dataItem(e.target.closest("tr"));
                    if(dataItem.ServerRedirectedPreviewURL.length > 0){
                        var content = '<img id="thumbspreview" src="'+ dataItem.ServerRedirectedPreviewURL +  '"  />'
                        return content;
                    }
                    else{
                        e.preventDefault();
                    }
                }
        });
      }
    }


    private getMockSearchResults(textToSearch: string): Promise<any> {
      return MockSPRequest.get(this.context.pageContext.web.absoluteUrl).then(() => {
          const mockSearchResults: any = [
              { Title: `Search Result #1 for ${textToSearch}`, Path: 'http://www.microsoft.com/' },
              { Title: `Search Result #2 for ${textToSearch}`, Path: 'http://aka.ms/OfficeDevPnP' },
              { Title: `Search Result #3 for ${textToSearch}`, Path: 'http://www.piasys.com/' }]
          return mockSearchResults;
      }) as Promise<any>;
    }


}

