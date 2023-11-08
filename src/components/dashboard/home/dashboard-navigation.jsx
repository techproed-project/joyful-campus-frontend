import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardNavigation = () => {
  const { userMenu } = useSelector((state) => state.auth);

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 justify-content-center">
        {userMenu.map((item) => (
          <Col key={item.title}>
            <Button
              as={Link}
              to={item.link}
              variant="outline-secondary"
              className="w-100 h-100"
            >
              {item.title}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashboardNavigation;
