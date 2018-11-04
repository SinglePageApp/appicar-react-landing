import React, { Component } from 'react';
import { I18n } from 'react-i18next';

import './Reviews.css';


export default class Reviews extends Component {
  render() {
    return (
      <div id="reviews" className="customer">
        <I18n>
          {
            (t) => (
              <div className="container">
                <div className="customer-heading">
                  <h3>{ t('home-page.reviews.title') }</h3>
                </div>
                <div className="customer-heading-grids">
                  <div className="col-md-4 customer-grid">
                    <div className="customer-info">
                      <p>{ t('home-page.reviews.text1') }</p>
                    </div>
                    <div className="customer-img">
                      <img src="http://cdn.appicar.com/users/GnLdeKy6kmDhAkAkF.jpg" alt="Edgardo" />
                      <h5>Edgardo</h5>
                    </div>
                  </div>
                  <div className="col-md-4 customer-grid">
                    <div className="customer-info">
                      <p>{ t('home-page.reviews.text2') }</p>
                    </div>
                    <div className="customer-img">
                      <img src="http://cdn.appicar.com/users/to-add.jpg" alt="Carla" />
                      <h5>Carla</h5>
                    </div>
                  </div>
                  <div className="col-md-4 customer-grid">
                    <div className="customer-info">
                      <p>{ t('home-page.reviews.text3') }</p>
                    </div>
                    <div className="customer-img">
                      <img src="http://cdn.appicar.com/users/to-add2.jpg" alt="Fabricio" />
                      <h5>Fabricio</h5>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            )
          }
        </I18n>
      </div>
    )
  }
}
