import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";
import CourseCard from "./course-card";

const Courses = () => {
  return (
    <Container>
      <Row className="g-5" xs={1} sm={2} md={3} lg={4}>
        {courses.map((item) => (
          <Col key={item.id}>
            <CourseCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
