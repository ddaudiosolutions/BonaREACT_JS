import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import ContactForm from "../components/form/ContactForm";

import GoogleMaps from "../blocks/google-maps/GoogleMaps";
import ContactsInside from "../blocks/contacts/ContactsInside";

const Contacts = () => {
  document.body.classList.add("page");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Contacts | Bona - Health & Medical ReactJS Template</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header logoColor="dark" />

      <main id="main" className="site-main">
        <PageTitleCommon title="Contacto" />
        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <div className="content text-center">
              <div className="clearfix">
                {/* <GoogleMaps /> */}

                <div className="spacer p-top-xl">
                  <div className="title">
                    <h2>Puede pedir cita llamando al:</h2>
                    <p>
                      <small className="">Clínica Rotger</small>
                      <br></br>
                      <a className="contact-phone" href="tel:971448500">
                        971 44 85 00
                      </a>{" "}
                      <span className=" contact-phone">/</span>
                      <a className="contact-phone" href="tel:971448554">
                        &nbsp;54
                      </a>
                      <small className="">Quirón Salud</small>
                      <br></br>
                      <a className="contact-phone" href="tel:901500501">
                        901 500 501
                      </a>
                    </p>
                    <p className="mov">
                      O si lo prefiere puede hacerlo online accediendo al siguiente enlace:
                    </p>
                    <button class="btn contact-btn">
                      <a
                        href="https://www.quironsalud.es/pedir-cita?centro=RT"
                        style={{ color: "white" }}
                      >
                        CITA ONLINE
                      </a>
                    </button>
                  </div>

                  <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                    {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <ContactsInside />
                    </div> */}

                    {/* <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="contact-form-shortcode">
                        <ContactForm />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Contacts;
