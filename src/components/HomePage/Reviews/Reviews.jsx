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
                      <p>Etiam euismod leo in felis imperdiet, non interdum diam egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                        sit amet nibh non tortor posuere mollis non vel velit. Praesent porttitor elit nec dapibus bibendum.</p>
                    </div>
                    <div className="customer-img">
                      <img src="./assets/images/c1.jpg" alt="" />
                      <h5>Dapibus</h5>
                    </div>
                  </div>
                  <div className="col-md-4 customer-grid">
                    <div className="customer-info">
                      <p>Etiam euismod leo in felis imperdiet, non interdum diam egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                        sit amet nibh non tortor posuere mollis non vel velit. Praesent porttitor elit nec dapibus bibendum.</p>
                    </div>
                    <div className="customer-img">
                      <img src="./assets/images/c2.jpg" alt="" />
                      <h5>Vulputate</h5>
                    </div>
                  </div>
                  <div className="col-md-4 customer-grid">
                    <div className="customer-info">
                      <p>Etiam euismod leo in felis imperdiet, non interdum diam egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                        sit amet nibh non tortor posuere mollis non vel velit. Praesent porttitor elit nec dapibus bibendum.</p>
                    </div>
                    <div className="customer-img">
                      <img src="./assets/images/c3.jpg" alt="" />
                      <h5>Interdum</h5>
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
