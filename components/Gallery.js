import React from "react";

//bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

//img
import img1 from "../images/portfolio/nature/img_1.jpg";
import img2 from "../images/portfolio/nature/img_2.jpg";
import img3 from "../images/portfolio/nature/img_3.jpg";
import img4 from "../images/portfolio/travel/img_1.jpg";
import img5 from "../images/portfolio/travel/img_2.jpg";
import img6 from "../images/portfolio/travel/img_3.jpg";

const Gallery = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="fs-2 fw-bold text-center"> گالری</h2>
            <div className="heading-line my-3"></div>
            <p className="text-muted text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </Col>
        </Row>
        <Row className="my-3 my-lg-0">
          <Col lg={12} className="text-center">
            <Button className="btn btn-rounded-secondary border-secondary">
              طبیعت
            </Button>
            <Button className="btn btn-rounded-secondary border-secondary mx-3">
              فناوری
            </Button>
            <Button className="btn btn-rounded-secondary border-secondary">
              مسافرت
            </Button>
            <Button className="btn btn-rounded-secondary border-secondary me-3">
              همه
            </Button>
          </Col>
        </Row>
        <Row className="my-5 gy-4 gy-lg-3">
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img1} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img2} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img3} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img4} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img5} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="galleryBox shadow rounded overflow-hidden position-relative">
              <div>
                <img src={img6} alt="img" className="img-fluid" />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle text-white galleryTxt">
                <h4>عباس دهقان</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
