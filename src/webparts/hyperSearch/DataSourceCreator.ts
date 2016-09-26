 import * as $ from 'jquery';
 import Utilities from './Utilities';
 import {
     ISearchColumn
 } from './SearchInterfaces';

 import * as sp from './SPSearchInterfaces';


 export default class DataSourceCreator {
  public  convertSearchResult(results:sp.SearchResult, displayColumns:ISearchColumn[]) {
      var queryResults:sp.DataRow[];
      var dataArray = [];
      var key: string;
      var col: ISearchColumn[];
      var resultIndexes = [];
      var data = {};

      if (results.PrimaryQueryResult) {
          queryResults = results.PrimaryQueryResult.RelevantResults.Table.Rows;
          if (queryResults && queryResults.length > 0) {
              for (var i = 0; i < queryResults[0].Cells.length; i++) {
                  key = queryResults[0].Cells[i].Key;
                  //path and listitemid, serverredirectedembedurl always are added
                  if (key.toUpperCase() != "PATH" && key.toUpperCase() != "CONTENTTYPEID"
                    && key.toUpperCase() != "LISTITEMID"
                    && key.toUpperCase() != "SERVERREDIRECTEDEMBEDURL"
                    && key.toUpperCase() != "SERVERREDIRECTEDPREVIEWURL"
                    && key.toUpperCase() != "WEBID"
                    && key.toUpperCase() != "SITEID"
                    && key.toUpperCase() != "UNIQUEID") {
                      col = null;
                      col = $.grep(displayColumns, function (value: ISearchColumn) {
                          return value.Mp == key;
                      });

                      if (col.length > 0) {
                          resultIndexes.push({ CellIndex: i, DataType: col[0].DataType, Format: col[0].Format });
                      }
                  }
                  else {
                      resultIndexes.unshift({ CellIndex: i, DataType: 'Text' });
                  }

              }

              for (var h = 0; h < queryResults.length; h++) {
                  data = {};
                  for (var i = 0; i < resultIndexes.length; i++) {
                      data[queryResults[h].Cells[resultIndexes[i].CellIndex].Key] =
                      this.convertResultValue(queryResults[h].Cells[resultIndexes[i].CellIndex].Value, resultIndexes[i].DataType, resultIndexes[i].Format);
                  }

                  data['Preview'] = Utilities.getPreviewLink(data,data['ServerRedirectedPreviewURL']);
                  data['ImageIcon'] = Utilities.getImageIcon(data['Path']);
                  data['FileLink'] = Utilities.getFileLink(data['Path'], data['ServerRedirectedEmbedURL']);
                  dataArray.push(data);
              }
          }

      }

      return dataArray;

  }

  convertResultValue(value:string, dataType:string, format:string) {
      var convertedValue;
      var dt: Date;
      var num: Number;
      var precision;
      var pnum: string;

      switch (dataType) {
          case "date":
              if (value) {
                  dt = new Date(value);
                  if (!isNaN(dt.valueOf())) {
                      if (format.toUpperCase() == "D") {
                          convertedValue = new Date(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate());
                      }
                      else {
                          convertedValue = new Date(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate(), dt.getUTCHours(), dt.getUTCMinutes());
                      }
                  }
                  else {
                      convertedValue = value;
                  }
              }
              break;

          case "decimal":
              if (value) {
                  num = new Number(value);
                  if (num) {
                      precision = new Number(format);
                      if (precision) {
                          pnum = num.toFixed(precision);
                          num = new Number(pnum);
                      }
                      if (num) {
                          convertedValue = num;
                      }
                      else {
                          convertedValue = value;
                      }

                  }
                  else {
                      convertedValue = value;
                  }

              }

              break;

          case "integer":
              if (value) {
                  num = new Number(value);
                  if (num) {
                      convertedValue = num;
                  }
                  else {
                      convertedValue = value;
                  }

              }

              break;

          default:
              convertedValue = value;

      }

      return convertedValue;


      }



    }