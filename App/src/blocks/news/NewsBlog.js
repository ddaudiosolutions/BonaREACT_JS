import React from "react";

import NewsItemsData from "../../data/news/newsItems.json";
import Blog from "../../components/Blog/Blog";
const NewsBlog = () => {
  return (
    <>
      <h1>estamos en blog</h1>
      <div className="">
        <Blog />
      </div>
    </>
  );
};

export default NewsBlog;
