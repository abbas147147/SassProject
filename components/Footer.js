import React from "react";

//icon
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import {
  BsInstagram,
  BsTelegram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <Container>
          <Row>
            <Col lg={4} className="py-4">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <FiPhoneCall className="fs-1 text-secondary ms-3" />
                <div>
                  <p className="mb-0">09179000000</p>
                  <p className="mb-0">شنبه تا پنج شنبه، 8 صبح تا 4 بعدظهر</p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="py-4">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <FiMail className="fs-1 text-secondary ms-3" />
                <div>
                  <p className="mb-0">info@company.com</p>
                  <p className="mb-0">پشتیبانی آنلاین</p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="py-4">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <FiMapPin className="fs-1 text-secondary ms-3" />
                <div>
                  <p className="mb-0">لورم ایپسوم</p>
                  <p className="mb-0">شنبه تا پنج شنبه</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-links text-white py-4">
        <Container className="text-center">
          <Row className="justify-content-center align-items-center">
            <Col lg={6}>
              <p className="mb-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </p>
            </Col>
            <Col lg={6}>
              <BsTelegram className="fs-2 m-1" />
              <BsInstagram className="fs-2 m-1" />
              <BsGithub className="fs-2 m-1" />
              <BsLinkedin className="fs-2 m-1" />
              <BsTwitter className="fs-2 m-1" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-black text-white footer-ul py-4">
        <Container>
          <Row>
            <Col lg={5} className="offset-1">
              <h3 className="fw-bold">Abbas Dehghan</h3>
              <hr />
              <p className="lh-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </Col>
            <Col lg={2}>
              <h4>محصولات</h4>
              <hr />
              <ul className="list-unstyled p-0">
                <li>لورم ایپسوم</li>
                <li className="py-2">لورم ایپسوم</li>
                <li>لورم ایپسوم</li>
                <li className="pt-2">لورم ایپسوم</li>
              </ul>
            </Col>
            <Col lg={2}>
              <h4>خدمات</h4>
              <hr />
              <ul className="list-unstyled p-0">
                <li>لورم ایپسوم</li>
                <li className="py-2">لورم ایپسوم</li>
                <li>لورم ایپسوم</li>
              </ul>
            </Col>
            <Col lg={2}>
              <h4>تماس با ما</h4>
              <hr />
              <ul className="list-unstyled p-0">
                <li>لورم ایپسوم</li>
                <li className="py-2">لورم ایپسوم</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-links text-white py-2">
        <Container className="text-center">
          <Row>
            <Col lg={12}>
              <h3>Abbas Dehghan</h3>
              <p> طراح و برنامه نویس صفحات وب</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
