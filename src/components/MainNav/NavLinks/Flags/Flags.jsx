import React, { Component } from 'react';

import { changeLanguage } from '../../../../i18n';

import './Flags.css';

export default class Flags extends Component {
  /**
   * Renders this component.
   * 
   * @returns {string} The components JSX code.
   */
  render() {
    return (
      <li role="presentation">
        <div className="flags">
          <button onClick={ () => changeLanguage('en') }>
            <span className="flag-icon flag-icon-us"></span>
          </button>
          <button onClick={ () => changeLanguage('es') }>
            <span className="flag-icon flag-icon-es"></span>
          </button>
          <button onClick={ () => changeLanguage('it') }>
            <span className="flag-icon flag-icon-it"></span>
          </button>
        </div>
      </li>
    );
  }
}
