const API_KEY = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/4/search/multi';

export const getSearchResults = async (searchTerm: string): Promise<any> => {
    const response = await fetch(`${baseUrl}?query=${searchTerm}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    });

    if (!response.ok) throw new Error('Error in search results response');

    return await response.json();
};
