import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import HashNavItem from '../../Navigation/HashNavItem';

// import Flags from './Flags/Flags'
import "./NavLinks.css";

const routes = [{
  name: 'Home',
  path: '/',
  external: false
},{
  name: 'About',
  path: '/about',
  external: false
}, {
  name: 'Stores',
  path: '/#stores',
  external: false
}, {
  name: 'My Account',
  path: 'http://my-react.appicar.com/',
  external: true
}, {
  name: 'Services',
  path: '/#services',
  external: false
}, {
  name: 'Reviews',
  path: '/#reviews',
  external: false
}, {
  name: 'Contact',
  path: '/#contact',
  external: false
}];

export default class MainNav extends Component {

  handleClick(e) {
    e.preventDefault();
    alert('hola');
  }
  render() {
    let template;

    return (
      <Nav>
        {
          routes.map((route, key) => {
            if (route.external) {
              template = (
                <NavItem eventKey={ key } href={ route.path } key={ key }>
                  {route.name}
                </NavItem>
              );
            } else {
              template = <HashNavItem key={ key } name={ route.name } to={ route.path } />;
            }
            return template;
          })
        }
      </Nav>
    );
  }
}
