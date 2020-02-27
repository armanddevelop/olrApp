import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyle = { color: "green" };
  return (
    <nav className="nav">
      <NavLink to="/" activeStyle={activeStyle} className="nav-link" exact>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
