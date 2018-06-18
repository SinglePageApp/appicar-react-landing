import React, { Component } from 'react';

import NavLinks from '../MainNav/NavLinks/NavLinks'
import './Copyright.css';

const YEAR = (new Date()).getFullYear();

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="w3agile-list">
            <NavLinks />
          </div>
          <div className="agileinfo">
            <p>© { YEAR } Appicar. copyright.description <a href="http://w3layouts.com/">W3layouts</a></p>
          </div>
        </div>
      </div>
    );
  }
}
