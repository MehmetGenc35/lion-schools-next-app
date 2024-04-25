import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({ type = "dark" }) => {
  return (
    <NavbarBrand href="/" as={Link}>
      <Image
        src={`/images/logo/logo-${type}.png`}
        alt={config.project.name}
        width={172}
        height={77}
      />
    </NavbarBrand>
  );
};

export default Logo;
