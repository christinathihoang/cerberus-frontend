import React from "react";
import "bulma/css/bulma.css";
import crest from "../assets/kappa-phi-lambda-crest.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
      <div className="box">
        <aside className="menu">
          <img src={crest} />
          <p className="menu-label">General</p>
          <ul className="menu-list">
          <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link to="/directory">Directory</Link>
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

          <p className="menu-label">Additional</p>
          <ul className="menu-list">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </aside>
      </div>
  );
}

export default Menu;
