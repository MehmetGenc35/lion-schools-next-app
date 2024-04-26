"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { config } from "@/helpers/config";
import { capitalizeFirstLetter } from "@/helpers/misc";
import SocialIcon from "./social-icon";


const SocialMenu = (props) => {
  
  const menuItems = Object.entries(config.contact.socialMedia);
  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link href={item[1]} key={item[1]} as={Link}>
        <SocialIcon iconName={item[0]} /> {capitalizeFirstLetter(item[0])}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default SocialMenu;
