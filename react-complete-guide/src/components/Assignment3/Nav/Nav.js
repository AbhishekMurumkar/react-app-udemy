import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const nav = (props) => {
  return (
    <div className="page">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__group">
            <NavLink
              to="/users"
              className="menu__NavLink"
            >
              Users
            </NavLink>
          </li>
          <li className="menu__group">
            <NavLink to="/courses" className="menu__NavLink">
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default nav;
