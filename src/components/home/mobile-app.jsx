import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./mobile-app.scss"

const MobileApp = () => {
  return (
    <Container className="mobile-app">
      <Row className="g-5">
        <Col lg={7}>
          <h2>Are you ready to start your online course?</h2>
        </Col>
        <Col lg={5}>
          <Button variant="outline-secondary">
            <FaApple /> App Store
          </Button>
          <Button variant="outline-secondary" className="ms-3">
            <FaGooglePlay /> Play Store
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MobileApp;
