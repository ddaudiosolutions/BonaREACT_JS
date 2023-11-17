import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

function SinglePost() {
  const singlePostData = useSelector((state) => state.postsBlog.singlePost);
  const imageSinglePost = useSelector((state) => state.postsBlog.imageSinglePost);
  return (
    // ver el post con content
    <div className="container">
      <div className="card ms-3">
        <div className="card-body">
          <img
            alt="example"
            src={imageSinglePost !== undefined && imageSinglePost}
            width="373"
            height="265"
          />
          <h5 className="card-title">
            {singlePostData !== undefined && parse(singlePostData.title.rendered)}
          </h5>
          <p className="card-text">
            {singlePostData !== undefined && parse(singlePostData.content.rendered)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
