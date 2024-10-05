import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credentials } from '@apptypes';
import { RootState } from '@app/store';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    }
  }),
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
