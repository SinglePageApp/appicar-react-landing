import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

// import Flags from './Flags/Flags'
import NavLinks from './NavLinks/NavLinks'
import "./MainNav.css";

export default class MainNav extends Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <NavLinks />
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
