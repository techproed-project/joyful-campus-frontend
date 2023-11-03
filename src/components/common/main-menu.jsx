import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineAliwangwang,
  AiOutlineHome,
  AiFillForward,
  AiOutlineCalendar,
  AiOutlineInfoCircle,
} from "react-icons/ai";


const MainMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link as={Link} to="/">
        <AiOutlineHome /> Home
      </Nav.Link>
      <Nav.Link as={Link} to="/courses">
        <AiFillForward /> Courses
      </Nav.Link>
      <Nav.Link as={Link} to="/events">
        <AiOutlineCalendar /> Events
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        <AiOutlineInfoCircle /> About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        <AiOutlineAliwangwang /> Contact
      </Nav.Link>
    </Nav>
  );
};

export default MainMenu;
