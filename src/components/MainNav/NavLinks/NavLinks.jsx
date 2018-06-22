import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import t from '../../../i18n';
import HashNavItem from '../../Navigation/HashNavItem';

// import Flags from './Flags/Flags'
import "./NavLinks.css";

const routes = [{
  name: t('nav.home'),
  path: '/',
  external: false
},{
  name: t('nav.about'),
  path: '/about',
  external: false
}, {
  name: t('nav.stores'),
  path: '/#stores',
  external: false
}, {
  name: t('nav.myAccount'),
  path: 'http://my-react.appicar.com/',
  external: true
}, {
  name: t('nav.services'),
  path: '/#services',
  external: false
}, {
  name: t('nav.reviews'),
  path: '/#reviews',
  external: false
}, {
  name: t('nav.contact'),
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
                <NavItem eventKey={ 'nav-' + key } href={ route.path } key={ key }>
                  {route.name}
                </NavItem>
              );
            } else {
              template = <HashNavItem eventKey={ 'nav-' + key } name={ route.name } to={ route.path } key={ key } />;
            }
            return template;
          })
        }
      </Nav>
    );
  }
}
