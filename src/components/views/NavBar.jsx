import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import "../scss/NavBar.scss";
class NavBar extends Component {
  render() {
    return (
      <Navbar className="navigation" fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <img src="OCILogo.png" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="#">Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
