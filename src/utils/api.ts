import axios, { AxiosPromise } from 'axios';

const API_KEY = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/search/multi';

export const getSearchResults = async (searchTerm: string) => (
  await axios.get(
    `${baseUrl}`,
    {
      params: {
        api_key: API_KEY,
        query: searchTerm,
      },
    },
  )
);
