export interface SearchResult {
 	 ElapsedTime?: number;
	 PrimaryQueryResult?: QueryResult;
	 Properties?: SPProperty[];
	 SecondaryQueryResults?: QueryResult[];
	 SpellingSuggestion?: string;
	 TriggeredRules?: string[];
}
export interface QueryResult {
 	 CustomResults?: CustomResult[];
	 QueryId?: string;
	 QueryRuleId?: string;
	 RefinementResults?: RefinementResults;
	 RelevantResults?: RelevantResults;
	 SpecialTermResults?: SpecialTermResults;
}
export interface CustomResult {
 	 GroupTemplateId?: string;
	 ItemTemplateId?: string;
	 Properties?: SPProperty[];
	 ResultTitle?: string;
	 ResultTitleUrl?: string;
	 Table?: DataTable;
	 TableType?: string;
}
export interface SPProperty {
 	 Key?: string;
	 Value?: string;
	 ValueType?: string;
}
export interface DataTable {
 	 Rows?: DataRow[];
}
export interface DataRow {
 	 Cells?: SPProperty[];
}
export interface RefinementResults {
 	 GroupTemplateId?: string;
	 ItemTemplateId?: string;
	 Properties?: SPProperty[];
	 Refiners?: Refiner[];
	 ResultTitle?: string;
	 ResultTitleUrl?: string;
}
export interface Refiner {
 	 Entries?: RefinerEntry[];
	 Name?: string;
}
export interface RefinerEntry {
 	 RefinementCount?: number;
	 RefinementName?: string;
	 RefinementToken?: string;
	 RefinementValue?: string;
}
export interface RelevantResults {
 	 GroupTemplateId?: string;
	 ItemTemplateId?: string;
	 Properties?: SPProperty[];
	 ResultTitle?: string;
	 ResultTitleUrl?: string;
	 RowCount?: number;
	 Table?: DataTable;
	 TotalRows?: number;
	 TotalRowsIncludingDuplicates?: number;
}
export interface SpecialTermResults {
 	 GroupTemplateId?: string;
	 ItemTemplateId?: string;
	 Properties?: SPProperty[];
	 Results?: SpecialTermResult[];
	 ResultTitle?: string;
	 ResultTitleUrl?: string;
}
export interface SpecialTermResult {
 	 Description?: string;
	 IsVisualBestBet?: boolean;
	 PiSearchResultId?: string;
	 RenderTemplateId?: string;
	 Title?: string;
	 Url?: string;
}
export interface SearchRequest {
 	 BlockDedupeMode?: number;
	 BypassResultTypes?: boolean;
	 ClientType?: string;
	 CollapseSpecification?: string;
	 Culture?: number;
	 DesiredSnippetLength?: number;
	 EnableFQL?: boolean;
	 EnableInterleaving?: boolean;
	 EnableNicknames?: boolean;
	 EnableOrderingHitHighlightedProperty?: boolean;
	 EnablePhonetic?: boolean;
	 EnableQueryRules?: boolean;
	 EnableSorting?: boolean;
	 EnableStemming?: boolean;
	 GenerateBlockRankLog?: boolean;
	 HiddenConstraints?: string;
	 HitHighlightedMultivaluePropertyLimit?: number;
	 HitHighlightedProperties?: string[];
	 ImpressionId?: string;
	 MaxSnippetLength?: number;
	 PersonalizationData?: string;
	 ProcessBestBets?: boolean;
	 ProcessPersonalFavorites?: boolean;
	 Properties?: QueryProperty[];
	 QueryTag?: string;
	 QueryTemplate?: string;
	 QueryTemplatePropertiesUrl?: string;
	 Querytext?: string;
	 RankingModelId?: string;
	 RefinementFilters?: string[];
	 Refiners?: string;
	 ReorderingRules?: ReorderingRule[];
	 ResultsUrl?: string;
	 RowLimit?: number;
	 RowsPerPage?: number;
	 SelectProperties?: string[];
	 SortList?: Sort[];
	 SourceId?: string;
	 StartRow?: number;
	 SummaryLength?: number;
	 Timeout?: number;
	 TimeZoneId?: number;
	 TotalRowsExactMinimum?: number;
	 TrimDuplicates?: boolean;
	 TrimDuplicatesIncludeId?: number;
	 UILanguage?: number;
}
export interface QueryProperty {
 	 Name?: string;
	 Value?: QueryPropertyValue;
}
export interface QueryPropertyValue {
 	 BoolVal?: boolean;
	 IntVal?: number;
	 QueryPropertyValueTypeIndex?: number;
	 StrArray?: string[];
	 StrVal?: string;
}
export interface ReorderingRule {
 	 Boost?: number;
	 MatchType?: number;
	 MatchValue?: string;
}
export interface Sort {
 	 Direction?: number;
	 Property?: string;
}

