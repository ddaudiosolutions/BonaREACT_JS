import React from "react";
import { Row, Col } from "react-bootstrap";
import ServicesContentItemsData from "../../data/services/servicesContentItems";
import { Link } from "react-router-dom";

const ServicesContent = () => {
  let columnSize = 3; // Tamaño inicial de la columna (col-3)

  // Verifica si hay menos de 4 elementos para ajustar el tamaño de la columna y centrar las imágenes
  if (ServicesContentItemsData.length < 4) {
    // Calcula el tamaño de la columna para centrar las imágenes
    columnSize = 12 / ServicesContentItemsData.length;
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Row className="gutter-width-sm with-pb-sm services-items justify-content-center">
          {ServicesContentItemsData.map((item, key) => (
            <Col key={key} xs={12} sm={columnSize} className="text-center mb-4">
              <Link
                title={item.title}
                className="services-item"
                to={{ pathname: process.env.PUBLIC_URL + item.link, state: { serviceData: item } }}
              >
                <div className="services-item-content">
                  <h3 className="services-item-t-head">{item.title}</h3>
                  <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space">
                    Leer más
                  </span>
                </div>
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img className="img-fluid" src={item.imgSrc} alt={item.title} />
                  </div>
                </div>
                {/* <div className="img-bg-color"></div> */}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesContent;
