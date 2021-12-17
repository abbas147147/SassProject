import React from "react";

//bootstrap
import { Container, Row, Carousel } from "react-bootstrap";
//img
import img1 from "../images/comments/IMG_E5274.JPG";
import img2 from "../images/comments/IMG_5356.jpg";

const Comment = () => {
  return (
    <div className="comments">
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
      <Container>
        <Row className="text-center text-white">
          <h3 className="fw-bold ">لورم ایپسوم متن ساختگی</h3>
          <hr
            style={{
              width: "150px",
              height: "5px",
              color: "#fff",
              margin: "0 auto",
            }}
          />
          <p className="mt-2 lead">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </Row>
        <Row className="text-center">
          <Carousel>
            <Carousel.Item>
              <img src={img1} alt="img" className="rounded w-75" />
              <Carousel.Caption>
                <h3 className="my-3">عباس دهقان</h3>
                <p className="lg-lg ">
                  تسلط کافی به کتابخانه ریکت React JavaScript , Css , Html ,
                  Bootstrap , Responsive , Sass , Git & GitHub
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="img" className="rounded w-75" />
              <Carousel.Caption>
                <h3 className="my-3">عباس دهقان</h3>
                <p className="lg-lg">
                  تسلط کافی به کتابخانه ریکت React JavaScript , Css , Html ,
                  Bootstrap , Responsive , Sass , Git & GitHub
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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

export default Comment;
