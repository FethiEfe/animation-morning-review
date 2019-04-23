import React from "react";
import "./menu.css";

export default function Menu(props) {
  return (
    <div className="nav-menu-cont">
      <div className="close-menu-button" onClick={props.closeMenu}>
        X
      </div>
      <a href="/"> Home</a>
      <a href="/"> About</a>
      <a href="/"> Contact</a>
    </div>
  );
}
