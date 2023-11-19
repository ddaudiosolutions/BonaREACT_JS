import React from "react";
import HeaderLogo from "../../blocks/logo/HeaderLogo";
import SearchModal from "../../components/modal/SearchModal";
import MenuModal from "../../components/modal/MenuModal";
import Actions from "../actions/Actions";
import HeaderLinkNav from "./HeaderLinkNav";
import BlogLink from "../../components/Blog/BlogLink";

const Header = ({ logoColor }) => {
  return (
    <header id="header" className="mb-4">
      <div className="wrapper">
        <div className="  ">
          <div className=" d-flex justify-content-around">
            <HeaderLogo logoColor={logoColor} />
            <HeaderLinkNav title={"Servicios"} link={"/services"} />
            {/* <HeaderLinkNav title={"Dermatología Estética"} link={"/services"} />
            <HeaderLinkNav title={"Dermatología Médica"} link={"/services"} /> */}
            <BlogLink />
            <div className="d-flex align-items-center">
              {/* <SearchModal /> */}
              <MenuModal />
            </div>

            <Actions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
