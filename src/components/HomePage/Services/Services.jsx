import React, { Component } from 'react';

import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div id="services" className="features">
        <div className="container">
          <div className="features-heading">
            <h3>home-page.services.title</h3>
          </div>
          <div className="features-grids">
            <div className="col-md-4 features-left">
              <div className="features-left-info">
              </div>
            </div>
            <div className="col-md-8 features-right">
              <div className="features-right-info">
                <h4>home-page.services.description</h4>
              </div>
              <div className="features-right-grids">
                <div className="features-right-left" title="Tell me more!">
                  <div className="features-right-icon effect-2">
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="features-right-right">
                  <p>
                    <b>Group reservations</b> so you can enjoy your outings with your family or friends. The bill can be divided individually
                    between the diners or you can pay for all or some of them. You're free to choose!
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
                    <b>Consult the menu</b> and
                    <b>order</b> what you want. You won't have to wait no longer for the waiter to come to your table and take your
                    order!
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
                    <b>Pay your order</b> from your cellphone and you won't have to ask for the bill and wait no longer for the waiter
                    to come and charge you. Available payment methods are:
                    <i>cash</i>,
                    <i>credit cards</i>,
                    <i>bank transfers</i>,
                    <i>payment networks</i> and
                    <i>online payment systems</i>.
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
                    <b>Smart search</b>. You can find your destination by
                    <i>proximity</i> using your cellphone's GPS or you can filter stores by
                    <i>food</i> or
                    <i>drink</i> offered.
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
  }
}
