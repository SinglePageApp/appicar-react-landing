import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import SearchBox from '../SearchBox/SearchBox';

import './Error404.css';


const NUM_FLAMES = 5;

export default class Error404 extends Component {
  render() {
    return (
      <div className="background">
        <I18n>
          {
            (t, { i18n, tr, ready }) => (
              <div className="banner">
                <div className="container">
                  <div className="error-404">
                    <div className="col-twelve">

                      <h1 className="kern-this" aria-label="404 Error.">
                        <span className="char1" aria-hidden="true">4</span>
                        <span className="char2" aria-hidden="true">0</span>
                        <span className="char3" aria-hidden="true">4</span>
                        <span className="char4" aria-hidden="true">&nbsp;</span>
                        <span className="char5" aria-hidden="true">E</span>
                        <span className="char6" aria-hidden="true">r</span>
                        <span className="char7" aria-hidden="true">r</span>
                        <span className="char8" aria-hidden="true">o</span>
                        <span className="char9" aria-hidden="true">r</span>
                        <span className="char10" aria-hidden="true">!</span>
                      </h1>

                      <p>{ t('error-404.description') }</p>

                      <div className="logfire">
                        {
                          (new Array(NUM_FLAMES)).map((f, key) => {
                            return (
                              <div className="flamegroup" key={ key }>
                                <div className="flame fl1"></div>
                                <div className="flame fl2"></div>
                                <div className="flame fl3"></div>
                              </div>
                            );
                          })
                        }
                      </div>​

                      <SearchBox className="error-search" />

                    </div>
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
