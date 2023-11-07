import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Map from "./map";
import ContactForm from "./contact-form";
import GetInTouch from "./get-in-touch";
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Card>
          <Card.Body>
            <Row className="g-5">
              <Col md={7}><ContactForm/></Col>
              <Col md={5}><GetInTouch/></Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Map />
    </div>
  );
};

export default Contact;
