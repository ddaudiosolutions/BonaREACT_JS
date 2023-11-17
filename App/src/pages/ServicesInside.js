import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import ServiceInsideImg from "../blocks/services/ServiceInsideImg";
import ServiceInsideDescription from "../blocks/services/ServiceInsideDescription";
import ServiceInsidePriceLists from "../blocks/services/ServiceInsidePriceLists";
import PageTitleCommon from "../blocks/page-title/PageTitleCommon";

import BackToServices from "../components/button/BackToServices";

const ServicesInside = (props) => {
  document.body.classList.add("single");
  document.body.classList.add("single-adveits_services");
  console.log(props.location.state.serviceData);

  const { id, title, imgSrc, servicios } = props.location.state.serviceData;

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Dermathos Mallorca</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      {/* <Loading /> */}

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleCommon title={title} />

        <div id="" className="mt-4">
          <div className="">
            <div id="">
              <div id="">
                <div id="img" className="">
                  <div className="">
                    <ServiceInsideImg img={imgSrc} />
                  </div>
                </div>

                <ServiceInsideDescription servicios={servicios} />

                {/* <ServiceInsidePriceLists /> */}

                <BackToServices />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ServicesInside;
