import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Copyright.css';

const YEAR = (new Date()).getFullYear();

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="w3agile-list">
            <ul>
              <li><Link to="/">nav.about</Link></li>
              <li><Link to="/#stores">nav.stores</Link></li>
              <li><a href="http://my-react.appicar.com/" className="nav-my-account">nav.myAccount</a></li>
              <li><Link to="/#services">nav.services</Link></li>
              <li><Link to="/#reviews">nav.reviews</Link></li>
              <li><Link to="/#contact">nav.contact</Link></li>
            </ul>
          </div>
          <div className="agileinfo">
            <p>© { YEAR } Appicar. copyright.description <a href="http://w3layouts.com/">W3layouts</a></p>
          </div>
        </div>
      </div>
    );
  }
}
