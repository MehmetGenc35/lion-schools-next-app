"use client";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";
import { FaBook, FaHome, FaPhone, FaSchool, FaSubscript } from "react-icons/fa";
const MainMenu = (props) => {
  const icons={
    Home: <FaHome/>,
    About: <FaBook/>,
    Contact: <FaPhone/>,
    Courses: <FaSchool/>,
    Events: <FaSubscript/>
  }

  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link href={item.link} key={item.link} as={Link}>
        {icons[item.title]}  {item.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};
export default MainMenu;
