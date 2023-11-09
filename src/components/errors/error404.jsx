import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const Error404 = () => {
  return (
    <Container>
      <Row className="g-5">
        <Col md={6}>
          <Image src="/images/errors/404.jpg" className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex flex-column pt-4 text-center text-md-start">
          <h2 className="text-primary fs-1">Not Found</h2>
          <p>
          The page you requested was not found.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
