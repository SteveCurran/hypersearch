import { ISPSearchResult } from '../SearchInterfaces';

export default class MockSPRequest {

    private static _items: ISPSearchResult[] = [{ Title: 'Mock Result', Url: 'http://www.microsoft.com/' }];

    public static get(restUrl: string, options?: any): Promise<ISPSearchResult[]> {
      return new Promise<ISPSearchResult[]>((resolve) => {
            resolve(MockSPRequest._items);
        });
    }
};