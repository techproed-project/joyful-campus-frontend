import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const Error403 = () => {
  return (
    <Container>
      <Row className="g-5">
        <Col md={6}>
          <Image src="/images/errors/403.jpg" className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex flex-column pt-4 text-center text-md-start">
          <h2 className="text-primary fs-1">Forbidden</h2>
          <p>
            Access to this resource on the server is denied! Please contact the
            administrator
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Error403;
