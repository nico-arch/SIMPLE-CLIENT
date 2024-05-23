import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../pages/Contact";
import { NavLink } from "react-router-dom/";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <hr />
      <Row className="justify-content-center mb-2">
        <Col md={{ span: 3, offset: 1 }}>
          <h6 className="fw-bold">
            Simple-Client &copy; {year > 2024 ? <>2024 - {year}</> : <>2024</>}{" "}
          </h6>
          Made by{" "}
          <a href="https://github.com/nico-arch">Nick Anderson Azémar</a>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h6 className="fw-bold">Contact</h6>
          <NavLink to="/contact" className="text-muted">
            Email me
          </NavLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h6 className="fw-bold">About</h6>
          <NavLink to="/about" className="text-muted">
            The App
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
