import React, { Component } from 'react';

import './Copyright.css';

const YEAR = (new Date()).getFullYear();

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="w3agile-list">
            <ul>
              <li><a href="about.html">nav.about</a></li>
              <li><a href="#stores">nav.stores</a></li>
              <li><a href="#" className="nav-my-account">nav.myAccount</a></li>
              <li><a href="#services">nav.services</a></li>
              <li><a href="#reviews">nav.reviews</a></li>
              <li><a href="#contact">nav.contact</a></li>
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
