"use client";
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={`tel:${config.contact.phone1}`}>
        <FaPhone /> {config.contact.phone1}
      </Nav.Link>

      <Nav.Link href={`tel:${config.contact.phone2}`}>
        <FaPhone /> {config.contact.phone2}
      </Nav.Link>

      <Nav.Link href={`mailto:${config.contact.email}`}>
        <FaEnvelope/> {config.contact.email}
      </Nav.Link>

      <Nav.Link href={config.contact.mapURL} target="_blank">
        <FaMapMarkerAlt/> {config.contact.address}
      </Nav.Link>
    </Nav>
  );
};

export default ContactMenu;
