import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col md={10} className="d-none d-md-block">
            {config.project.slogan}
          </Col>
          <Col md={2} className="text-center text-md-end">
            Login
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
