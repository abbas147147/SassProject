import React from "react";

//bootstrap
import { Container, Button, Row, Col, Image } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="fs-2 fw-bold text-center">لورم ایپسوم متن</h2>
            <div className="heading-line"></div>
          </Col>
        </Row>
        <Row className="align-items-center my-5 gy-md-3">
          <Col md={6}>
            <h3 className="fs-4 text-center p-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </h3>
          </Col>
          <Col md={6}>
            <p className="fs-6 text-lg-end text-md-center border-end m-end-2 p-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
