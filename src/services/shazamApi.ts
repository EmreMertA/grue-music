import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchHits, TrackType } from '../types/Track';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '15b844157fmsh076e1c8f19ecb82p1d2275jsn9b5566db6004'
      );
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrCharts: builder.query<TrackType[], string>({
      query: (genre) =>
        `/charts/genre-country?&genre_code=${genre}&country_code=TR`,
    }),
    search: builder.query<SearchHits, string>({
      query: (query) => `/search/multi?query=${query}&search_type=SONGS`,
    }),
  }),
});

export const { useGetTrChartsQuery, useSearchQuery } = shazamApi;
