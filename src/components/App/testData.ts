export const expectedResults = [
  {
    vote_average: 8,
    vote_count: 6883,
    id: 857,
    video: false,
    media_type: 'movie',
    title: 'Saving Private Ryan',
    popularity: 18.82,
    poster_path: '\/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg',
    original_language: 'en',
    original_title: 'Saving Private Ryan',
    genre_ids: [
      18,
      36,
      10752,
    ],
    backdrop_path: '\/gRtLcCQOpYUI9ThdVzi4VUP8QO3.jpg',
    adult: false,
    overview: 'As U.S. troops storm the beaches of Normandy, three brothers lie dead.',
    release_date: '1998-07-24',
  },
  {
    original_name: 'Tom Clancy\'s Jack Ryan',
    id: 73375,
    media_type: 'tv',
    name: 'Tom Clancy\'s Jack Ryan',
    vote_count: 0,
    vote_average: 0,
    poster_path: '\/1raUrQr8Y2tSYjTDbk8wfWGKTmX.jpg',
    first_air_date: '2018-08-31',
    popularity: 14.351,
    genre_ids: [
      10759,
      18,
      10768,
    ],
    original_language: 'en',
    backdrop_path: '\/9ops4f0v0TdUFcHRiJTGSnlBpVB.jpg',
    overview: 'When CIA analyst Jack Ryan stumbles upon a suspicious series.',
    origin_country: [
      'US',
    ],
  },
];

export const expectedApiResponse = {
  data: {
    results: expectedResults,
  },
};

