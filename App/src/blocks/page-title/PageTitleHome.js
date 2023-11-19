import React from "react";

const PageTitleHome = () => {
  return (
    <section
      id="page-title"
      className="with-img wrapper"
      /* style={{ backgroundImage: "url(assets/img/placeholder/melanomoaBackground.jpg)" }} */
      style={{ backgroundColor: "#30b6c0" }}
    >
      <h1 className="medium">DERMATHOS</h1>
      <hr className="titlehr" />
      <h3 className="regular">DERMATOLOGIA INTEGRAL</h3>

      {/* <div className="spacer p-top-lg no-space">
            <a href={process.env.PUBLIC_URL + "/about-us"} className="btn btn-primary">
              Learn More
            </a>
          </div> */}
      {/* <nav className="languages lang-position">
            <ul className="nav">
              <li className="lang-item current-lang">
                <a title="En" href={process.env.PUBLIC_URL + "/"}>
                  En
                </a>
              </li>
            </ul>
          </nav> */}

      <div className="page-title-bg-color"></div>
    </section>
  );
};

export default PageTitleHome;
