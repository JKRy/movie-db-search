import {enableFetchMocks} from 'jest-fetch-mock';
enableFetchMocks();

import {getSearchResults} from './api';

import {expectedResults, expectedApiResponse} from '../components/App/testData';

describe('Api', () => {
    beforeEach(() => {
        // @ts-ignore
        fetch.resetMocks();
    });

    test('should call the movie DB with the correct search term', async () => {
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify({results: expectedResults}));

        const res = await getSearchResults('ryan');

        expect(res).toEqual(expectedApiResponse);
        // @ts-ignore
        expect(fetch.mock.calls.length).toEqual(1);
        // @ts-ignore
        expect(fetch.mock.calls[0][0]).toEqual(
            'https://api.themoviedb.org/4/search/multi?query=ryan'
        );
    });
});
