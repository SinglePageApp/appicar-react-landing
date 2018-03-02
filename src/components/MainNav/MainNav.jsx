import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Flags from './Flags/Flags'
import "./MainNav.css";

const routes = [{
    name: 'Home',
    path: '/'
  },{
    name: 'About',
    path: '/about'
  }, {
    name: 'Stores',
    path: '/#stores'
  }, {
    name: 'My Account',
    path: 'http://my-react.appicar.com/'
  }, {
    name: 'Services',
    path: '/#services'
  }, {
    name: 'Reviews',
    path: '/#reviews'
  }, {
    name: 'Contact',
    path: '/#contact'
}];

export default class MainNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              routes.map((route, key) => {
                return (
                  <NavItem eventKey={ key } href={ route.path }>{ route.name }</NavItem>
                );
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
