import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown   } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
        
      <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">My Portfolio</Nav.Link>
          <Nav.Link href="/">Clients</Nav.Link>
          <Nav.Link href="/" active>Get in Touch</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>      
    )
  }
}
