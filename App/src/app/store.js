import { configureStore } from "@reduxjs/toolkit";
import blogPostsSlice from "../slices/blogPostsSlice";

const reducer = {
  postsBlog: blogPostsSlice,
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
