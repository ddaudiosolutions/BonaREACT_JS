import React from "react";

const PageTitleCommon = (props) => {
  return (
    <div id="page-title">
      <div className="wrapper text-center">
        <h2 className="large">{props.title}</h2>
      </div>
    </div>
  );
};

export default PageTitleCommon;
