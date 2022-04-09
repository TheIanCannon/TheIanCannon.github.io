import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="Navbar">
      <Link to="/Welcome" className="tabLinks">
        Welcome
      </Link>
      <Link to="/Status" className="tabLinks">
        Status
      </Link>
      <Link to="/Career" className="tabLinks">
        Career
      </Link>
      <Link to="/Coding" className="tabLinks">
        Coding
      </Link>
      <Link to="/Writing" className="tabLinks">
        Writing
      </Link>
      <Link to="/Voice" className="tabLinks">
        Voice
      </Link>
      <Link to="/Contact" className="tabLinks">
        Contact
      </Link>
    </header>
  );
}
