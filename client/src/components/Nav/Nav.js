import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <ul className="nav justify-content-center navStyle">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          My Github Favorites
        </a>
      </li>
    </ul>
  );
};

export default Nav;
