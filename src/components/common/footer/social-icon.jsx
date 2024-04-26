"use client";
import { config } from "@/helpers/config";
import React from "react";


const SocialIcon = ({ iconName }) => {
    const icons = Object.entries(config.contact.socialIcons);
    let icon= icons.filter((item) => item[0] === iconName)[0][1];
    console.log(icon);
    let IconName = icon;

  return <IconName size={20} />;
};

export default SocialIcon;
