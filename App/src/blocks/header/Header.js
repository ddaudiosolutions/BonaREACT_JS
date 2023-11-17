import React from "react";
import HeaderLogo from "../../blocks/logo/HeaderLogo";
import SearchModal from "../../components/modal/SearchModal";
import MenuModal from "../../components/modal/MenuModal";
import Actions from "../actions/Actions";
import HeaderLinkNav from "./HeaderLinkNav";
import BlogLink from "../../components/Blog/BlogLink";

const Header = ({ logoColor }) => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper">
        <div className="header-content d-flex justify-content-end">
          <div className="header-center align-self-center">
            <HeaderLogo logoColor={logoColor} />
          </div>
          <div className="header-right d-flex justify-content-end  ms-auto">
            <HeaderLinkNav title={"Servicios"} link={"/services"} />
            <HeaderLinkNav title={"Dermatología Estética"} link={"/services"} />
            <HeaderLinkNav title={"Dermatología Médica"} link={"/services"} />
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
