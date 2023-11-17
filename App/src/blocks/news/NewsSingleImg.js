import React from "react";

const NewsSingleImg = (props) => {
  console.log(props);
  return (
    <div className="img object-fit">
      <div className="object-fit-cover">
        <img src={props.image} alt="5 Reasons to have Aortic Surgery" />
      </div>
    </div>
  );
};

export default NewsSingleImg;
