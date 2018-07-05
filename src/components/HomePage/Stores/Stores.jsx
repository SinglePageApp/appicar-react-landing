import React, { Component } from 'react';
import { Spinner } from 'react-spinkit';
import { I18n } from 'react-i18next';
import { QueryRenderer } from 'react-relay';

import environment from '../../../relay/environment';
import query from '../../../relay/queries/StoresQuery';
import stores from './StoresList';

import './Stores.css';


export default class Stores extends Component {

  constructor() {
    super();

    this.state = {
      variables: {
        skip: 0,
        limit: 12
      }
    }
  }
  /**
   * Renders the component.
   * 
   * @returns {string} The component's JSX code.
   */
  render() {
    return (
      <div id="stores" className="special">
        <I18n>
          {
            (t) => (
              <div className="container">
                <div className="special-heading">
                  <h3>{ t('home-page.stores.title') }</h3>
                </div>

                <QueryRenderer
                  environment={ environment }
                  query={ query }
                  variables={ this.state.variables }
                  render={ stores }
                />

              </div>
            )
          }
        </I18n>
      </div>
    )
  }
}
