import { Component } from "react";

class NavbarClassComponent extends Component {
  render() {
    return (
      <nav className="navmenu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Class Component</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavbarClassComponent;
