import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { I18n } from 'react-i18next';

import HashNavItem from '../../Navigation/HashNavItem';
import Flags from './Flags/Flags';

import "./NavLinks.css";


const routes = [{
  name: 'nav.home',
  path: '/',
  external: false
}, {
  name: 'nav.about',
  path: '/about',
  external: false
}, {
  name: 'nav.stores',
  path: '/#stores',
  external: false
}, {
  name: 'nav.myAccount',
  path: 'http://my-react.appicar.com/',
  external: true
}, {
  name: 'nav.services',
  path: '/#services',
  external: false
}, {
  name: 'nav.reviews',
  path: '/#reviews',
  external: false
}, {
  name: 'nav.contact',
  path: '/#contact',
  external: false
}];

export default class MainNav extends Component {
  /**
   * Renders the component.
   * 
   * @returns {string} The component's JSX code.
   */
  render() {
    let template;

    return (
        <I18n>
          {
            (t, { i18n, tr, ready }) => (
              <Nav>
                {
                  routes.map((route, key) => {
                    if (route.external) {
                      template = (
                        <NavItem eventKey={ 'nav-' + key } href={ route.path } key={ key }>
                          { t(route.name) }
                        </NavItem>
                      );
                    } else {
                      template = <HashNavItem eventKey={ 'nav-' + key } name={ t(route.name) } to={ route.path } key={ key } />;
                    }
                    return template;
                  })
                }

                <Flags />
              </Nav>
            )
          }
        </I18n>
    );
  }
}
