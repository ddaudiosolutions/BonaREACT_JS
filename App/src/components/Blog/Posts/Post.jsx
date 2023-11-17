import React, { useState } from "react";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { setImageSinglePost, setSinglePost } from "../../../slices/blogPostsSlice";
import { Link, useHistory } from "react-router-dom";

function Post(props) {
  const { post } = props;
  const dispatch = useDispatch();
  const navigate = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSinglePost(post));
    dispatch(setImageSinglePost(imagePost));
    navigate.push("/news-single-post");
  };

  const imagePost =
    post._embedded["wp:featuredmedia"] !== undefined
      ? post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
      : null;

  return (
    <div className="container">
      <div className="card ms-3">
        <img alt="example" src={imagePost !== undefined && imagePost} width="373" height="265" />

        <div className="card-body"></div>
        <h5 className="card-title">{post.title.rendered}</h5>
        {parse(post.excerpt.rendered)}
        <Link to="/post">
          <button className="btn btn-primary" onClick={handleClick}>
            Leer más
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
