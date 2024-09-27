import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credentials } from '@apptypes';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost/api/v1/' }),
  endpoints: (builder) => ({
    getData: builder.query/* <define type> */({
      query: () => `data`
    }),
    login: builder.mutation({
      query: (credentials: Credentials) => ({
        url: '/auth',
        method: 'POST',
        body: credentials, //TODO format body
      }),
      /* transformErrorResponse,
      transformResponse,
      invalidatesTags */
    })
  })
});

export const { useGetDataQuery, useLoginMutation } = api;
export default api;
