import React, { useEffect, useState } from "react";
import Post from "./Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsBlog } from "../../slices/blogPostsSlice";

function Blog() {
  console.log("Blog");
  /* const dispatch = useDispatch(); */
  const blogPosts = useSelector((state) => state.postsBlog);

  console.log(blogPosts);

  if (!blogPosts || !blogPosts.posts) {
    return <p>Cargando...</p>;
  } else {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            {blogPosts.posts.map((post, index) => (
              <div key={post.id} className="col-md-4 mb-3 mt-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
