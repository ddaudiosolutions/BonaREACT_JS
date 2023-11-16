import React, { useState, useEffect } from "react";
import CarouselImagenes from "../../components/CarrouselImagenes";

const AboutsUs = () => {
  const [pageAbout, setPage] = useState(false);

  useEffect(() => {
    window.location.pathname.includes("about-us") ? setPage(true) : setPage(false);
  }, []);

  return (
    <div
      id="about-us"
      className={
        "block  before-block spacer p-top-xl " + (pageAbout ? "bg-gray-light p-bottom-xl" : " ")
      }
    >
      <div className="wrapper">
        <div className="row gutter-width-sm with-pb-md">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="">
              <CarouselImagenes />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="description-2 text-center mb-3">
              <h3>NUESTRO OBJETIVO ES CUIDAR TU PIEL</h3>
            </div>
            <div className="description-2 text-justify">
              <p>
                El equipo de <strong>DERMATHOS</strong> nace con un clara vocación hospitalaria, con
                profesionales altamente calificados en sus respectivos campos de trabajo dentro de
                la Dermatología y una apuesta clara por el trabajo en equipo y la excelencia médica.
              </p>
              <p>
                En <strong>DERMATHOS</strong> tenemos por objetivo cuidar tu piel. Para ello
                centramos nuestros esfuerzos en ofrecer un servicio personalizado basado en la
                evidencia científica, la experiencia y la ética profesional.
              </p>
              <p>
                Todo ello, contando con la tecnología y materiales más avanzados en un entorno
                diseñado específicamente para la atención de nuestros pacientes con las máximas
                garantías de resultados satisfactorios.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="icon-list">
          <div className="icon-list-items">
            <div className="icon-list-item">
              <p>
                <span className="d-flex">
                  <i className="fas fa-check"></i>
                  <span>Constant Improvement</span>
                </span>
              </p>
            </div>

            <div className="icon-list-item">
              <p>
                <span className="d-flex">
                  <i className="fas fa-check"></i>
                  <span>Commitment to Customers</span>
                </span>
              </p>
            </div>

            <div className="icon-list-item">
              <p>
                <span className="d-flex">
                  <i className="fas fa-check"></i>
                  <span>Best Quality You Can Get</span>
                </span>
              </p>
            </div>

            <div className="icon-list-item">
              <p>
                <span className="d-flex">
                  <i className="fas fa-check"></i>
                  <span>More than 30 available services</span>
                </span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutsUs;
