import React from "react";

//bootstrap
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Accardion = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="fs-2 fw-bold text-center"> اکاردیون</h2>
            <div className="heading-line my-3"></div>
            <p className="text-center text-muted">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0" flush className="mt-3 mb-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>لورم ایپسوم متن ساختگی با تولید</Accordion.Header>
            <Accordion.Body className="text-muted">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>لورم ایپسوم متن ساختگی با تولید</Accordion.Header>
            <Accordion.Body className="text-muted">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Accardion;
