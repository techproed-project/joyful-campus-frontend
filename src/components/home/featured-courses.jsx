import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";
import CourseCard from "../courses/course-card";
import "./featured-courses.scss";

const featuredCourses = courses.filter((item) => item.featured);

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2>Featured Courses</h2>

      <Container>
        <Row className="g-5" xs={1} sm={2} md={3} lg={4}>
          {featuredCourses.map((item) => (
            <Col key={item.id}>
              <CourseCard {...item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
