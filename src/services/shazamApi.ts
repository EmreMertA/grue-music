import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ArtistDetails } from '../types/ArtistDetails';
import type { SearchHits, TrackType } from '../types/Track';
import type { TrackDetails } from '../types/TrackDetails';
import type { TracksRelated } from '../types/TracksRelated';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
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
        `v1/charts/genre-country?&genre_code=${genre}&country_code=TR`,
    }),
    search: builder.query<SearchHits, string>({
      query: (query) => `v1/search/multi?query=${query}&search_type=SONGS`,
    }),
    getTrackDetails: builder.query<TrackDetails, string>({
      query: (track_id) => `v1/tracks/details?track_id=${track_id}`,
    }),
    getTracksRelated: builder.query<TracksRelated[], string>({
      query: (track_id) => `v1/tracks/related?track_id=${track_id}`,
    }),
    getArtistDetails: builder.query<ArtistDetails, string>({
      query: (artist_id) => `v2/artists/details?artist_id=${artist_id}`,
    }),
    getChartByCity: builder.query<any, string>({
      query: (city_id) => `v1/charts/city?city_id=${city_id}`,
    }),
    getWorldCharts: builder.query<any, void>({
      query: () => `v1/charts/world`,
    }),
  }),
});

export const {
  useGetTrChartsQuery,
  useSearchQuery,
  useGetTrackDetailsQuery,
  useGetTracksRelatedQuery,
  useGetArtistDetailsQuery,
  useGetChartByCityQuery,
  useGetWorldChartsQuery,
} = shazamApi;
