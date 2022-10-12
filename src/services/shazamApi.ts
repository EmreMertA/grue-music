import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TrackType } from '../types/Track';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15b844157fmsh076e1c8f19ecb82p1d2275jsn9b5566db6004',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

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
    getTrCharts: builder.query<TrackType[], void>({
      query: () => '/charts/country?country_code=TR',
    }),
  }),
});

export const { useGetTrChartsQuery } = shazamApi;