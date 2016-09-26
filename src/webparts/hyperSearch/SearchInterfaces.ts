


export interface ISPSearchResults {
    value: ISPSearchResult[];
  }

  export interface ISPSearchResult {
    Title: string;
    Url: string;
  }

 export interface ISearchProperty {
        ID: number;
        Title: string;
        ManagedProperty: string;
        DataType: string;
        DataTypeLocal: string;
        Key: string;
        Format: string;
        System: boolean;
        Imported: boolean;
    }

    export interface ISearchPropertyType {
        DataType: string;
        DataTypeLocal: string;
    }

    export interface ISavedSearch{
        ID: number;
        Title: string;
        SearchDescription: string;
        Query: IQueryPacket;
        QueryID: string;
    }

    export interface ISearchTerms {
        Terms: string;
        Conjunction:string
        FilterConjunction: string;
    }

    export interface ISearchFilter{
        ID: string;
        Name: string;
        DataType: string;
        Title: string;
        Operator: string;
        OperatorLocal: string;
        ConditionDscrp: string;
        Condition: string;
        ConditionExt: string;
        Conjunction: string;
        ConjunctionLocal: string;
    }

    export interface ISearchColumn {
        Mp: string;
        Title: string;
        DataType: string;
        Format: string;
        Width: number;
    }

    export interface ISearchGroup {
        Mp: string;
        Order: number;
    }

    export interface ISearchSort {
        Mp: string;
        Order: number;
    }

    export interface IQueryPacket {
        Terms: ISearchTerms;
        Filters: ISearchFilter[];
        Columns: ISearchColumn[];
        Groups: ISearchGroup[];
        Sorts: ISearchSort[];
        TrimDuplicates: boolean;
        Source: string;
    }

    export interface IQueryParameters {
        QueryText: string;
        SelectProperties: string[];
        RowLimit: number;
        TrimDuplicates: boolean;
        Scope: string;
        Source: string;
        Extensions: Object[];
    }

    export interface IWebPartInformation {
        HostPageURL: string;
        WebPartID: string;
        HostURL: string;
    }

    export interface ISearchAppPartConfig {
        SearchID: string;
        SearchOnLoad: boolean;
        DisplayResultsOnLoad: boolean;
        HideSearch: boolean;
        ResultsTitle: string;
        UseImagingViewer:boolean;
        EnablePreview:boolean;
        PreviewAutoHide:boolean;
    }

    export interface ISourceList{
        ID:string;
        Name:string;
        Type:string;
        Icon:string;
        ItemCount:number;
    }

    export interface ISourceField{
        InternalName:string;
        Name:string;
        Type:string;
        Icon:string;
    }

    export interface ISearchPropertyChoiceSource{
        ListID:string;
        FieldName:string;
    }

    export interface ISearchPropertyConfig{
        ChoiceSource:ISearchPropertyChoiceSource;
    }

    export class SearchPropertyChoiceSource implements ISearchPropertyChoiceSource {
        public ListID:string;
        public FieldName:string;
    }