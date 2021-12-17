import React from "react";

//bootstrap
import { Container, Button, Row, Col, Image } from "react-bootstrap";
//icons
import { BsStack, BsStackOverflow, BsSpotify } from "react-icons/bs";
//img
import n1 from "../images/services/1.png";
import n2 from "../images/services/2.png";
import n3 from "../images/services/3.png";

const Services = () => {
  return (
    <div className="services">
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="fs-2 fw-bold text-center">لورم ایپسوم متن</h2>
            <div className="heading-line"></div>
          </Col>
        </Row>
        <Row className="align-items-center my-5 gy-md-3">
          <Col md={6}>
            <h3 className="fs-4 text-center p-4 lh-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </h3>
          </Col>
          <Col md={6}>
            <p className="fs-6 text-lg-end text-md-center border-end p-4 lh-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className=" align-items-center g-5">
          <Col lg={6} className="text-center text-lg-end">
            <BsStack className="icon" />
            <h3 className="my-3 text-primary fw-bold">لورم ایپسوم</h3>
            <p className=" lh-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <Button className="btn btn-rounded-secondary border-primary">
              مطالعه بیشتر
            </Button>
          </Col>
          <Col lg={6} className="text-center text-lg-start">
            <Image src={n1} alt="pic" fluid />
          </Col>

          <Col lg={6} className="text-center text-lg-end">
            <Image src={n2} alt="pic" fluid />
          </Col>
          <Col lg={6} className="text-center text-lg-end ">
            <BsStackOverflow className="icon" />
            <h3 className="my-3 text-primary fw-bold">لورم ایپسوم</h3>
            <p className=" lh-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <Button className="btn btn-rounded-secondary border-primary">
              مطالعه بیشتر
            </Button>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <BsSpotify className="icon" />
            <h3 className="my-3 text-primary fw-bold">لورم ایپسوم</h3>
            <p className=" lh-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <Button className="btn btn-rounded-secondary border-primary">
              مطالعه بیشتر
            </Button>
          </Col>
          <Col lg={6} className="text-center text-lg-start">
            <Image src={n3} alt="pic" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
