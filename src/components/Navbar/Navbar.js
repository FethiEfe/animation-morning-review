import React, { Component } from "react";
import "./navbar.css";
import Menu from "./Menu/Menu";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <nav className="nav-cont">
        {this.state.showMenu && <Menu closeMenu={this.toggleMenu} />}
        <div className="nav-links-cont">
          <div className="menu-icon" onClick={this.toggleMenu}>
            &#9776;
          </div>
          <a href="/"> Home</a>
          <a href="/"> About</a>
          <a href="/"> Contact</a>
        </div>
      </nav>
    );
  }
}
