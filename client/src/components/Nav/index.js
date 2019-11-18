import "./style.css";
import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-default">
      <a className="navbar-brand" target="_blank" href="https://www.nsa.gov/">NSA Online</a>

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
