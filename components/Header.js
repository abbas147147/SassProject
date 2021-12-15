import React from "react";

//bootstrap
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top navbar-dark shadow menu ">
        <Container>
          <Navbar.Brand href="#home">Abbas Dehghan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                صفحه اصلی
              </Nav.Link>
              <Nav.Link href="#link">محصولات</Nav.Link>
              <Nav.Link href="#link">خدمات</Nav.Link>
              <Nav.Link href="#link">گالری</Nav.Link>
              <Nav.Link href="#link">درباره ما</Nav.Link>
              <Button variant="danger" className="btn btn-rounded-secondary">
                ورود به اکانت
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
