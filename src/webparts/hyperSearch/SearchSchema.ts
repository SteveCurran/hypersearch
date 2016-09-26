


import {
  ISearchColumn
} from './searchInterfaces'

export default class SearchSchema {


  public static getSchema():ISearchColumn[]  { return [
  {
    "Mp": "Rank",
    "DataType": "number",
    "Title":"Rank",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "DocId",
    "DataType": "number",
    "Title":"DocId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "WorkId",
    "DataType": "number",
    "Title":"WorkId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Title",
    "DataType": "string",
    "Title":"Title",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Author",
    "DataType": "string",
    "Title":"Author",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Size",
    "DataType": "number",
    "Title":"Size",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Path",
    "DataType": "string",
    "Title":"Path",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Description",
    "DataType": "string",
    "Title":"Description",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Write",
    "DataType": "date",
    "Title":"Write",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "LastModifiedTime",
    "DataType": "date",
    "Title":"LastModifiedTime",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "CollapsingStatus",
    "DataType": "number",
    "Title":"CollapsingStatus",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "HitHighlightedSummary",
    "DataType": "string",
    "Title":"HitHighlightedSummary",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "HitHighlightedProperties",
    "DataType": "string",
    "Title":"HitHighlightedProperties",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "contentclass",
    "DataType": "string",
    "Title":"contentclass",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "PictureThumbnailURL",
    "DataType": "string",
    "Title":"PictureThumbnailURL",
    "Format":"", "Width":0
  },
  {
    "Mp": "ServerRedirectedURL",
    "DataType": "string",
    "Title":"ServerRedirectedURL",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ServerRedirectedEmbedURL",
    "DataType": "string",
    "Title":"ServerRedirectedEmbedURL",
    "Format":"", "Width":0
  },
  {
    "Mp": "ServerRedirectedPreviewURL",
    "DataType": "string",
    "Title":"ServerRedirectedPreviewURL",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "FileExtension",
    "DataType": "string",
    "Title":"FileExtension",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ContentTypeId",
    "DataType": "string",
    "Title":"ContentTypeId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ParentLink",
    "DataType": "string",
    "Title":"ParentLink",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ViewsLifeTime",
    "DataType": "number",
    "Title":"ViewsLifeTime",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ViewsRecent",
    "DataType": "number",
    "Title":"ViewsRecent",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "SectionNames",
    "DataType": "string",
    "Title":"SectionNames",
    "Format":"", "Width":0
  },
  {
    "Mp": "SectionIndexes",
    "DataType": "string",
    "Title":"SectionIndexes",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "SiteLogo",
    "DataType": "string",
    "Title":"SiteLogo",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "SiteDescription",
    "DataType": "string",
    "Title":"SiteDescription",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "deeplinks",
    "DataType": "string",
    "Title":"deeplinks",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "importance",
    "DataType": "number",
    "Title":"importance",
    "Format":"", "Width":0
  },
  {
    "Mp": "SiteName",
    "DataType": "string",
    "Title":"SiteName",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "IsDocument",
    "DataType": "boolean",
    "Title":"IsDocument",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "FileType",
    "DataType": "string",
    "Title":"FileType",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "IsContainer",
    "DataType": "boolean",
    "Title":"IsContainer",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "WebTemplate",
    "DataType": "string",
    "Title":"WebTemplate",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "SecondaryFileExtension",
    "DataType": "string",
    "Title":"SecondaryFileExtension",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "docaclmeta",
    "DataType": "string",
    "Title":"docaclmeta",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "SPWebUrl",
    "DataType": "string",
    "Title":"SPWebUrl",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "UniqueId",
    "DataType": "string",
    "Title":"UniqueId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ProgId",
    "DataType": "string",
    "Title":"ProgId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "LinkingUrl",
    "DataType": "string",
    "Title":"LinkingUrl",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "OriginalPath",
    "DataType": "string",
    "Title":"OriginalPathv",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ResultTypeIdList",
    "DataType": "string",
    "Title":"ResultTypeIdList",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "ResultTypeId",
    "DataType": "string",
    "Title":"ResultTypeId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "RenderTemplateId",
    "DataType": "string",
    "Title":"RenderTemplateId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "PartitionId",
    "DataType": "string",
    "Title":"PartitionId",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "UrlZone",
    "DataType": "number",
    "Title":"UrlZone",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "Culture",
    "DataType": "string",
    "Title":"Culture",
    "Format":"",
    "Width":0
  },
  {
    "Mp": "piSearchResultId",
    "DataType": "string",
    "Title":"piSearchResultId",
    "Format":"",
    "Width":0
  }
]};



}


