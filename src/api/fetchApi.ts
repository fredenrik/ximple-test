import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API = 'https://mocki.io/v1/';

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: fetchBaseQuery({baseUrl: API}),
  endpoints: (builder) => ({
    getCredits: builder.query({
      query: () => '2156ae74-9927-4f44-8960-dbdbd0d798ac',
    }),
  }),
});

export const { useGetCreditsQuery } = fetchApi;