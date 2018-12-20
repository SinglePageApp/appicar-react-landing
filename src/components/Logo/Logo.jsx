import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>
            <Link to="/">
              <img alt="Appicar" src={ logo } />
            </Link>
          </h1>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
