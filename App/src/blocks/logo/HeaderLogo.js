import React from "react";

const HeaderLogo = ({ logoColor }) => {
  return (
    <div className="header-logo mt-3">
      <a className="" href={process.env.PUBLIC_URL + "/"}>
        <img src={"assets/img/logo/logo-dermathos.png"} alt="Logo" />
        {/*  <img src={"assets/img/logo/logo-" + logoColor + ".svg"} alt="Logo" /> */}
      </a>
    </div>
  );
};

export default HeaderLogo;
