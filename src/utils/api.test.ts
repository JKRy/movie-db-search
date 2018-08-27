import mockAxios from 'axios';
import { getSearchResults } from './api';

import { expectedResults, expectedApiResponse } from '../components/App/testData';

describe('Api', () => {
  test('should call the movie DB with the correct search term', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: expectedResults,
        },
      }),
    );

    getSearchResults('ryan').then((response) => {
      expect(response).toEqual(expectedApiResponse);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/search/multi',
        {
          params: {
            api_key: process.env.API_KEY,
            query: 'ryan',
          },
        },
      );
    });
  });
});
