import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>My new app</h1>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
