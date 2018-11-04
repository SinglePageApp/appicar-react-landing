import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import { QueryRenderer } from 'react-relay';

import environment from '../../../relay/environment';
import query from '../../../relay/queries/FeaturedStoresQuery';
import featuredStores from './FeaturedStores';
import SearchBox from '../../SearchBox/SearchBox';

import './Header.css';


export default class Header extends Component {
  /**
   * Renders the component.
   * 
   * @returns {string} The component's JSX code.
   */
  render() {
    return (
      <I18n>
        {
          (t) => (
            <div className="background">
              <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
              </ul>
              <div className="banner">
                <div className="container">
                  <div className="banner-info">
                    <h2>{ t('home-page.header.title') }</h2>
                    <p>{ t('home-page.header.description') }</p>
                  </div>
                  <div className="banner-grads">
                    <QueryRenderer environment={ environment } query={ query } render={ featuredStores } />
                    
                    <div className="clearfix"></div>
    
                    <SearchBox />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}
