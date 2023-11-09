import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./topbar.scss";
import UserMenu from "./user-menu";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row className="align-items-center">
          <Col md={9} className="d-none d-md-block">
            {config.project.slogan}
          </Col>
          <Col md={3} className="text-center text-md-end">
            <UserMenu/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
