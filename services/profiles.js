import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profilesApi = createApi({
  reducerPath: 'profilesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
  endpoints: (builder) => ({
    getAllProfiles: builder.query({
      query: () => `profile/`,
    }),
  }),
})

export const { useGetAllProfilesQuery } = profilesApi
