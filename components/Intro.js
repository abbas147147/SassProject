import React from "react";

//bootstrap
import { Container, Button, Row, Col, Image } from "react-bootstrap";
//img
import introImg from "./../images/intro/1.png";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="my-5">
        <Row className="align-items-center gy-5">
          <Col lg={6} className="text-white">
            <h1 className="fs-3 fw-bold">لورم ایپسوم متن ساختگی</h1>
            <p className="my-3 fs-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <Button variant="btn btn-rounded-secondary"> لورم ایپسوم</Button>
          </Col>
          <Col lg={6} className="text-start">
            <Image src={introImg} alt="intro" fluid />
          </Col>
        </Row>
      </Container>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.21,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
