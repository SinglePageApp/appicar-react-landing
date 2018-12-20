import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import NavLinks from '../MainNav/NavLinks/NavLinks'
import './Copyright.css';


const YEAR = (new Date()).getFullYear();

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <I18n>
          {
            (t) => (
              <div className="container">
                <div className="w3agile-list">
                  <NavLinks />
                </div>
                <div className="agileinfo">
                  <p>© { YEAR } Appicar. { t('copyright.description') } <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
              </div>
            )
          }
        </I18n>
      </div>
    );
  }
}
