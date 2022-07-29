import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profilesApi = createApi({
  reducerPath: 'profilesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PROFILE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProfiles: builder.query({
      query: () => `profile/`,
    }),
    getProfile: builder.query({
      query: (id) => `profile/${id}`,
    }),
  }),
})

export const { useGetAllProfilesQuery, useGetProfileQuery } = profilesApi
