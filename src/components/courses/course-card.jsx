import React from "react";
import { Card } from "react-bootstrap";
import {FiUser, FiTrendingUp, FiMessageCircle} from "react-icons/fi"
import "./course-card.scss";

const CourseCard = ({image, title, user, rating, comment}) => {
  return (
    <Card className="course-card">
      <Card.Body>
        <div className="image">
            <Card.Img src={`/images/courses/${image}`} />
        </div>
        
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
          <div>
            <FiUser /> {user}
          </div>
          <div>
            <FiTrendingUp /> {rating}
          </div>
          <div>
            <FiMessageCircle /> {comment}
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
