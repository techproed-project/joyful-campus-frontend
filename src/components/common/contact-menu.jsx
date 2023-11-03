import React from "react";
import { Nav } from "react-bootstrap";
import { config } from "../../helpers/config";
import {
  FaPhone,
  FaEnvelope,
  FaAddressCard,
} from "react-icons/fa";

const ContactMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={`tel:${config.contact.phone1}`}>
        <FaPhone /> {config.contact.phone1}
      </Nav.Link>
      <Nav.Link href={`tel:${config.contact.phone2}`}>
        <FaPhone /> {config.contact.phone2}
      </Nav.Link>
      <Nav.Link href={`mail:${config.contact.email}`}>
        <FaEnvelope /> {config.contact.email}
      </Nav.Link>
      <Nav.Link href={config.contact.mapURL} target="_blank">
        <FaAddressCard /> {config.contact.address}
      </Nav.Link>
      
    </Nav>
  );
};

export default ContactMenu;
