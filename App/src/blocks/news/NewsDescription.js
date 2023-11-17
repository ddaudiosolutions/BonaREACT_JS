import React from "react";
import parse from "html-react-parser";
const NewsDescription = (props) => {
  return <div className="description clearfix">{parse(props.content)}</div>;
};

export default NewsDescription;
