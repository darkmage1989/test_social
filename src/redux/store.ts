import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./apis/apis";
import userData from '../redux/slices/userDataSlice'
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    userData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
    
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
