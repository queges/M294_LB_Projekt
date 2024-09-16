import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Contact Manager</h1>
      <ul>
        <li>
          <Link to="/">Contact List</Link>
        </li>
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
