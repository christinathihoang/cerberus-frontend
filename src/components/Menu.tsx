import React from "react";
import "bulma/css/bulma.css";
import crest from "../assets/kappa-phi-lambda-crest.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Menu() {
  return (
    <Router>
      <div className="box">
        <aside className="menu">
          <img src={crest} />
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
          <p className="menu-label">Information</p>
          <ul className="menu-list">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/littles">Littles</Link>
            </li>
          </ul>
          <p className="menu-label">Forms</p>
          <ul className="menu-list">
            <li>
              <Link to="/nickname-form">Nickname Submission</Link>
            </li>
          </ul>
        </aside>
      </div>
    </Router>
  );
}

export default Menu;
