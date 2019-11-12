import "./style.css";
import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-default">
      <a className="navbar-brand" href="/">Book Search</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>

    </nav>
  )
};

export default Nav;
