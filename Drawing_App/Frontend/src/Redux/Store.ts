import { configureStore } from '@reduxjs/toolkit'
import  myslice  from './Slices/data'
import { drawingApi } from './Slices/Api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {

    mycounter:myslice, 
    [drawingApi.reducerPath] :drawingApi.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(drawingApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);