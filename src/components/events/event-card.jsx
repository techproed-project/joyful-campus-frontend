import React from "react";
import { Card } from "react-bootstrap";
import {FiClock, FiMapPin} from "react-icons/fi"
import "./event-card.scss";

const EventCard = ({image, title, time, location}) => {
  return (
    <Card className="event-card">
      <Card.Body>
        <div className="image">
            <Card.Img src={`/images/events/${image}`} />
        </div>
        <Card.Subtitle>
          <div>
            <FiClock /> {time}
          </div>
          <div>
            <FiMapPin /> {location}
          </div>
        </Card.Subtitle>
        
        <Card.Title>{title}</Card.Title>
        
      </Card.Body>
    </Card>
  );
};

export default EventCard;
