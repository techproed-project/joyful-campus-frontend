import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import MainMenu from "./main-menu";
import "./footer.scss";
import SocialMenu from "./social-menu";
import ContactMenu from "./contact-menu";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col lg={3}>
            <Link to="/">
              <Image
                src="/images/logo/logo-white.png"
                alt={config.project.name}
              />
            </Link>
            <p>{config.project.description}</p>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <h3>Quick Links</h3>
            <MainMenu className="flex-column" />
          </Col>
          <Col sm={6} md={4} lg={3}>
            <h3>Social Links</h3>
            <SocialMenu className="flex-column" />
          </Col>
          <Col md={4} lg={3}>
            <h3>Contact Us</h3>
            <ContactMenu className="flex-column" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
