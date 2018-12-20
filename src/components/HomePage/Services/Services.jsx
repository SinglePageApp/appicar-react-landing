import React, { Component } from 'react';
import { I18n } from 'react-i18next';

import './Services.css';


export default class Services extends Component {
  render() {
    return (
      <div id="services" className="features">
        <I18n>
          {
            (t) => (
              <div className="container">
                <div className="features-heading">
                  <h3>{ t('home-page.services.title') }</h3>
                </div>
                <div className="features-grids">
                  <div className="col-md-4 features-left">
                    <div className="features-left-info">
                    </div>
                  </div>
                  <div className="col-md-8 features-right">
                    <div className="features-right-info">
                      <h4>{ t('home-page.services.description') }</h4>
                    </div>
                    <div className="features-right-grids">
                      <div className="features-right-left" title="Tell me more!">
                        <div className="features-right-icon effect-2">
                          <i className="fa fa-users" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="features-right-right">
                        <p>
                          <b>{ t('home-page.services.groupReservations1') }</b>&nbsp;
                          { t('home-page.services.groupReservations2') }
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="features-right-grids">
                      <div className="features-right-left" title="Tell me more!">
                        <div className="features-right-icon effect-2">
                          <i className="fa fa-book" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="features-right-right">
                        <p>
                          <b>{ t('home-page.services.menu') }</b>&nbsp;
                          { t('home-page.services.and') }&nbsp;
                          <b>{ t('home-page.services.order') }</b>&nbsp;
                          { t('home-page.services.whatUWant') }
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="features-right-grids">
                      <div className="features-right-left" title="Tell me more!">
                        <div className="features-right-icon effect-2">
                          <i className="fa fa-credit-card" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="features-right-right">
                        <p>
                          <b>{ t('home-page.services.pay') }</b>&nbsp;
                          { t('home-page.services.cellphone') }&nbsp;
                          <i>{ t('home-page.services.cash') }</i>,&nbsp;
                          <i>{ t('home-page.services.credit') }</i>,&nbsp;
                          <i>{ t('home-page.services.bank') }</i>,&nbsp;
                          <i>{ t('home-page.services.networks') }</i>&nbsp;
                          { t('home-page.services.and') }&nbsp;
                          <i>{ t('home-page.services.online') }</i>.
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="features-right-grids">
                      <div className="features-right-left" title="Tell me more!">
                        <div className="features-right-icon effect-2">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="features-right-right">
                        <p>
                        <b>{ t('home-page.services.search') }</b>.&nbsp;
                        { t('home-page.services.find') }&nbsp;
                        <i>{ t('home-page.services.proximity') }</i>&nbsp;
                        { t('home-page.services.gps') }&nbsp;
                        <i>{ t('home-page.services.food') }</i>&nbsp;
                        { t('home-page.services.or') }&nbsp;
                        <i>{ t('home-page.services.drink') }</i>&nbsp;
                        { t('home-page.services.offered') }.
                        </p>
                      </div>
                      <div className="clearfix"> </div>
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
