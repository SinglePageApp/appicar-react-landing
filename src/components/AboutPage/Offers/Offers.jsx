import React, { Component } from 'react';
import { I18n } from 'react-i18next';

import './Offers.css';


export default class Offers extends Component {
  render() {
    return (
      <div className="jarallax offers">
        <I18n>
          {
            (t) => (
              <div className="container">
                <div className="offers-heading">
                  <h3>{ t('about-page.offers') }</h3>
                </div>
                <div className="offers-grids">
                  <div className="col-md-6 wthree-offers-left">
                    <div className="offers-left-heading">
                      <h4>Quisque eu ullamcorper dui. Nullam commodo ornare ipsum.</h4>
                    </div>
                    <div className="offers-left-grids">
                      <div className="offers-number">
                        <p>1</p>
                      </div>
                      <div className="offers-text">
                        <p>
                          Integer egestas non lorem eget aliquet. Nulla egestas felis et maximus elementum. Morbi a dui ac nunc mollis rhoncus. Mauris
                          eu erat vitae enim congue placerat. Integer consequat aliquet facilisis. Phasellus ut venenatis nisi, et lobortis
                          sem.
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="offers-left-grids offers-left-middle">
                      <div className="offers-number">
                        <p>2</p>
                      </div>
                      <div className="offers-text">
                        <p>
                          Integer egestas non lorem eget aliquet. Nulla egestas felis et maximus elementum. Morbi a dui ac nunc mollis rhoncus. Mauris
                          eu erat vitae enim congue placerat. Integer consequat aliquet facilisis.
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="offers-left-grids">
                      <div className="offers-number">
                        <p>3</p>
                      </div>
                      <div className="offers-text">
                        <p>
                          Integer egestas non lorem eget aliquet. Nulla egestas felis et maximus elementum. Morbi a dui ac nunc mollis rhoncus. Mauris
                          eu erat vitae enim congue placerat.
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                  <div className="col-md-6 wthree-offers-right">
                    <h5>Cras consequat et velit quis molestie. Etiam bibendum laoreet enim, nec malesuada ex fermentum et. Donec molestie
                      diam nec lorem accumsan bibendum.</h5>
                    <p>Vivamus est sem, pellentesque vel libero sit amet, varius tempor orci. Integer egestas metus vitae ultrices tristique.
                      Fusce lectus dui, venenatis vitae justo nec, aliquet feugiat nunc. </p>
                    <ul>
                      <li>
                        <a href="#">Phasellus sem leo, interdum quis risus</a>
                      </li>
                      <li>
                        <a href="#">Nullam egestas nisi id malesuada aliquet </a>
                      </li>
                      <li>
                        <a href="#"> Donec condimentum purus urna venenatis</a>
                      </li>
                      <li>
                        <a href="#">Ut congue, nisl id tincidunt lobor mollis</a>
                      </li>
                      <li>
                        <a href="#">Cum sociis natoque penatibus et magnis</a>
                      </li>
                      <li>
                        <a href="#">Suspendisse nec magna id ex pretium</a>
                      </li>
                      <li>
                        <a href="#">Ut congue, nisl id tincidunt lobor mollis</a>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            )
          }
        </I18n>
      </div>
    );
  }
}
