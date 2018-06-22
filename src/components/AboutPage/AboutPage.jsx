import React, { Component } from 'react';

import t from '../../i18n';
import Header from '../Header/Header';
import Offers from './Offers/Offers';
import Team from './Team/Team';

import './AboutPage.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="aboutpage">

        <Header />

        <div className="about">
          <div className="container">
            <div className="about-heading">
              <h2>{ t('about-page.title') }</h2>
            </div>
            <div className="about-grids">
              <div className="col-md-5 wthree-about-left">
                <div className="wthree-about-left-info">
                  <img src="../../../assets/images/n2.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-7 agileits-about-right">
                <h5>Cras ac pellentesque diam. Mauris eu purus eu lectus fermentum dictum at ut dolor. Fusce id sodales turpis. Mauris
                  facilisis tristique tincidunt. Phasellus hendrerit ligula dui, quis elementum mi condimentum at.</h5>
                <p>In hac habitasse platea dictumst. Aenean quis orci a erat convallis tincidunt. Curabitur blandit efficitur quam sit
                  amet sagittis. Mauris aliquam, dui nec semper pellentesque, ex erat fringilla purus, ut placerat ante urna in nulla.
                  Nullam est nunc, dictum dictum blandit sit amet, gravida et elit. Suspendisse ultricies mauris eu tortor blandit
                  gravida.
                  <span>Nullam eget viverra mi. Etiam eget posuere eros, id vulputate neque. Etiam interdum consequat erat, sed auctor
                    neque ullamcorper a. Integer commodo eget risus vitae gravida. Nullam libero mi, condimentum quis finibus ut,
                    consequat ac quam.</span>
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <Offers />

        <Team />
      </div>
    )
  }
}
