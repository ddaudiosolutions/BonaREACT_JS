import React from "react";

function HeaderLinkNav(props) {
  return (
    <div className="d-flex align-items-center">
      <div className="links">
        <div className="links-items">
          <div className="links-item">
            <a
              href={process.env.PUBLIC_URL + `${props.link}`}
              className="btn btn-lg btn-link border-0 p-0 "
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLinkNav;
