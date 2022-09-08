import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from './Slices/moviesSlice'
import { seriesSlice } from './Slices/seriesSlice'

export const store = configureStore({
    reducer: {      
      movies: moviesSlice.reducer,
      series: seriesSlice.reducer,
    },
  });

// For typescript :

// Infer the `RootState` and `AppDispatch` types from the store itself  
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch