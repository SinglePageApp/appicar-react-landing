import React, { Component } from 'react';

import './Flags.css';

export default class Flags extends Component {
  render() {
    return (
      <div className="flags">
        <a href="#" onClick="changeLang('en')">
          <span className="flag-icon flag-icon-us"></span>
        </a>
        <a href="#" onClick="changeLang('es')">
          <span className="flag-icon flag-icon-es"></span>
        </a>
        <a href="#" onClick="changeLang('it')">
          <span className="flag-icon flag-icon-it"></span>
        </a>
      </div>
    )
  }
}
