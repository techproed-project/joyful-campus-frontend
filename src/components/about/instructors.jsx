import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import instructors from "../../helpers/data/instructors.json";
import InstructorCard from "./instructor-card";
import "./instructors.scss";

const Instructors = () => {
  return (
    <div className="instructors">
      <Container>
        <Row className="g-5">
          <Col lg={6}>
            <h2 className="title">Our Most Experienced Instructors</h2>
          </Col>

          {instructors.map((item) => (
            <Col lg={3} md={4} sm={6} key={item.id}>
              <InstructorCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Instructors;
