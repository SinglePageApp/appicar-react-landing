import React, { Component } from 'react';
import { I18n } from 'react-i18next';

import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <I18n>
          {
            (t, { i18n, tr, ready }) => (
              <div className="container">
                <div className="footer-grids">
                  <div className="footer-heading">
                    <h3>{ t('footer.title') }</h3>
                  </div>
                  <div className="footer-icons">
                    <ul>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <span>Twitter</span>
                      </li>
                      <li>
                        <a href="#" className="twitter facebook">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <span>Facebook</span>
                      </li>
                      <li>
                        <a href="#" className="twitter chrome">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <span>Google+</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        </I18n>
      </div>
    );
  }
}
