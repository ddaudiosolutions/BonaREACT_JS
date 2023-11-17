import React from "react";
import { Col, Row } from "react-bootstrap";

const ServiceInsideDescription = (props) => {
  const { servicios } = props;
  console.log(servicios);
  return (
    <div id="description" className="mt-5 text-center ">
      <div className="wrapper">
        <div className="">
          <Row xs={12} sm={6} md={3} lg={4}>
            {servicios.map((servicio, index) => (
              <Col key={index} className="mb-3">
                <div className="mb-2">
                  <h5 className="mb-2">{servicio.titulo}</h5>
                  <p>{servicio.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ServiceInsideDescription;
