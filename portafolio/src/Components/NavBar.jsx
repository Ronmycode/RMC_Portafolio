import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { FaBeer } from "./react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Logo from "../assets/logo1.png";

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "50px" }} />
      </div>

      {/* Menu Bar */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div>
        {/* <FaBeer /> */}
        <FaBars />
        <FaTimes />
      </div>
      {/* mobile Menu */}
      <div></div>
      {/* social icons */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
