import React from "react";

const PageTitleHome = () => {
  return (
    <section
      id="page-title"
      className="block with-img"
      style={{ backgroundImage: "url(assets/img/placeholder/melanomoaBackground.jpg)" }}
    >
      <div className="wrapper text-left d-flex">
        <div className="align-self-center w-100">
          <div className="title">
            <h1 className="medium">DERMATHOS</h1>
            <hr className="titlehr" />
          </div>
          <div className="title">
            <h3 className="medium">DERMATOLOGIA INTEGRAL</h3>
          </div>

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
        </div>
      </div>

      <div className="page-title-bg-color"></div>
    </section>
  );
};

export default PageTitleHome;
