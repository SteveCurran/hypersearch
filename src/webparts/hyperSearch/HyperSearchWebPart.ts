
require('set-webpack-public-path!');
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneChoiceGroup,
  PropertyPaneCustomField
} from '@microsoft/sp-client-preview';

import styles from './HyperSearch.module.scss';
import * as strings from 'mystrings';

import * as $ from 'jquery';
import search from './Search';
import searchSchema from './SearchSchema';


import { IHyperSearchWebPartProps } from './IHyperSearchWebPartProps';



export default class HyperSearchWebPart extends BaseClientSideWebPart<IHyperSearchWebPartProps> {
  private search:search;
  public constructor(context: IWebPartContext) {
    super(context);
  }

  public onInit<T>(): Promise<T> {
    this.search = new search(this.context,this.properties);
    return Promise.resolve();
  }



  public render(): void {

    this.domElement.innerHTML =
    `
    <div class="${styles.hyperSearch}">
        <div class="ms-Grid">
            <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg6">
                    <input id="searchText" type="text" class="ms-TextField-field" />
                </div>
                <div class="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg6">
                    <input id="searchCommand" type="button" class="ms-Button" value="Search" />
                </div>
            </div>
            <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg12">
                    <div style="height:75px"></div>
                </div>
            </div>
        </div>
        <div>
          <style scoped>
            .k-grid tbody .k-button {
                min-width: 12px;
                width: 25px;
                height: 25px;
                padding: 2px 0 2px 6px;
            }
            .k-grid-content {
                overflow-y:auto;
            }
            </style>
          <div id="resultGrid"></div>
        </div>
    </div>
    `

    $('#searchCommand').click(() => {
        let textToSearch = $('#searchText').val();
        this.search.getSearchResultsAsync(textToSearch);
    });
  }



  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: "View Options"
          },
          groups: [
            {
              groupFields: [
                PropertyPaneToggle('preview', {label: "Preview"})
              ]
            }
          ]
        },
        {
          header: {
            description: "Display Properties"
          },
          groups: [
            {
              groupFields: [
                PropertyPaneCustomField('displayprops',{onRender:(elem) => {
                   $(elem).kendoMultiSelect({
                      dataTextField: "Title",
                      dataValueField: "Mp",
                      dataSource: {
                          data: searchSchema.getSchema(), sort: [{ 'field': 'Title', 'dir': 'asc' }]
                      },
                      change: (e:kendo.ui.MultiSelectEvent) => {
                          this.properties.displayprops = JSON.stringify(e.sender.value());
                      },
                      value:this.properties.displayprops?JSON.parse(this.properties.displayprops):null
                      });
                }})
              ]
            }
          ]
        }
      ]
    };
  }


  }

