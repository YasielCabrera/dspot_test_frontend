import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { profilesApi } from '../services/profiles'

const makeStore = () =>
  configureStore({
    reducer: {
      [profilesApi.reducerPath]: profilesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(profilesApi.middleware),
  })

export const wrapper = createWrapper(makeStore)
