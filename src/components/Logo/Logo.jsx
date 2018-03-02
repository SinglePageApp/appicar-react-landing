import React, { Component } from "react";

import logo from './logo.svg';
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>
            <a routerLink="/">
              <img alt="Appicar" src={ logo } />
            </a>
          </h1>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
