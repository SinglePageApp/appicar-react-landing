import React, { Component } from 'react';
import { I18n } from 'react-i18next';

import './Team.css';


export default class Team extends Component {
  render() {
    return (
      <div className="team">
        <I18n>
          {
            (t, { i18n, tr, ready }) => (
            <div className="container">
              <div className="team-heading">
                <h3>{ t('about-page.team.title') }</h3>
              </div>
              <div className="team-grids">
                <div className="col-md-4 team-grid">
                  <img src="../../../assets/images/t1.jpg" alt="" />
                  <h4>{ t('about-page.team.eng') } Matías J. Magni</h4>
                  <p>{ t('about-page.team.member1') }</p>
                  <div className="icons">
                    <ul>
                      <li>
                        <a className="twitter linkedin" href="https://www.linkedin.com/in/matiasmagni/" target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="https://twitter.com/matiasmagni" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter chrome" href="https://plus.google.com/+Mat%C3%ADasMagni" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 team-grid">
                  <img src="../../../assets/images/t2.jpg" alt="" />
                  <h4>Donec condimentum</h4>
                  <p>Proin vitae luctus dui, sit amet ultricies leo. Donec condimentum, mauris et pharetra molestie, dolor dui dignissim
                    metus, a malesuada elit odio non velit.</p>
                  <div className="icons">
                    <ul>
                      <li>
                        <a href="#" className="twitter linkedin">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="twitter chrome">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 team-grid">
                  <img src="../../../assets/images/t3.jpg" alt="" />
                  <h4>Paretra molestie</h4>
                  <p>Proin vitae luctus dui, sit amet ultricies leo. Donec condimentum, mauris et pharetra molestie, dolor dui dignissim
                    metus, a malesuada elit odio non velit.</p>
                  <div className="icons">
                    <ul>
                      <li>
                        <a href="#" className="twitter linkedin">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="twitter chrome">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          )
        }
      </I18n>
      </div>
    )
  }
}
