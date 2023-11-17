import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogServices from "../service/posts.service";

const initialState = {
  posts: [],
  postFullResponse: [],
  singlePost: undefined,
  imageSinglePost: null,
};

export const getAllPostsBlog = createAsyncThunk(
  "All posts from Blog / GET ",
  async (data, { rejectedWithValue }) => {
    console.log("entrando en llamada");
    try {
      const res = await BlogServices.getAllPostsBlog(data);
      console.log(res);
      return res;
    } catch (error) {
      throw rejectedWithValue(error);
    }
  }
);

export const getSinglePostBlog = createAsyncThunk(
  "SINGLE posts from Blog / GET ",
  async (data, { rejectedWithValue }) => {
    console.log("entrando en getSinglePostBlog");
    try {
      const res = await BlogServices.getSinglePostBlog(data);
      console.log("getSinglePostBlog", res);
      return res;
    } catch (error) {
      throw rejectedWithValue(error);
    }
  }
);

const blogPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    setImageSinglePost: (state, action) => {
      console.log(action.payload);
      state.imageSinglePost = action.payload;
    },
    setSinglePost: (state, action) => {
      state.singlePost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPostsBlog.fulfilled, (state, action) => {
      state.posts = action.payload.data;
    });

    builder.addCase(getSinglePostBlog.fulfilled, (state, action) => {
      state.singlePost = action.payload.data;
    });
  },
});

export const { setImageSinglePost, setSinglePost } = blogPostsSlice.actions;
const { reducer } = blogPostsSlice;
export default reducer;
