import React from "react";

const ServiceInsideImg = (props) => {
  return (
    <div className="img-no-wrap-1">
      <div className="object-fit">
        <div className="object-fit-cover text-center">
          <img src={props.img} alt="ImagenServicio" style={{ width: "50vw", height: "45vh" }} />
        </div>
      </div>
    </div>
  );
};

export default ServiceInsideImg;
