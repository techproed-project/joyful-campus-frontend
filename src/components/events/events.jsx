import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import events from "../../helpers/data/events.json";
import EventCard from "./event-card";

const Events = () => {
  return (
    <Container>
      <Row className="g-5" xs={1} sm={2} md={3} lg={4}>
        {events.map((item) => (
          <Col key={item.id}>
            <EventCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
