import React from "react";
import "./NavBar.css";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const openNav = () => {
    console.log("clicked");
    setOpenNavBar(!openNavBar);
  };
  return (
    <nav>
      <div className="logo"><h2 className="text-2xl font-bold">Portfolio</h2></div>
      <RiMenu3Line size={"2.7rem"} className="navicon" onClick={openNav} />
      <ul className={openNavBar ? "active" : ""}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
