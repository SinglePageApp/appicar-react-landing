import React, { Component } from 'react';

import SearchBox from '../../SearchBox/SearchBox';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="background">
        <ul className="cb-slideshow">
          <li><span>Image 01</span></li>
          <li><span>Image 02</span></li>
          <li><span>Image 03</span></li>
        </ul>
        <div className="banner">
          <div className="container">
            <div className="banner-info">
              <h2 translate>home-page.header.title</h2>
              <p translate>home-page.header.description</p>
            </div>
            { this.isLoading ? (
              <GearsLoadingSpinner>loading-spinner.loading</GearsLoadingSpinner>
            ) : (
              <div className="banner-grads">
                {
                  this.stores.map((store, key) => {
                    return (
                      <div className="col-md-4 banner-grad" key={ key }>
                        <div className="banner-grad-img">
                          <img src={ store.image } alt={ store.name } />
                          <h4>{ store.name }</h4>
                          <p>
                            <span className="storeDescription">{ store.description }</span>
                            <br /> { store.address }, { store.city }
                          </p>
                        </div>
                      </div>
                    );
                  })
                }
                <div className="clearfix"></div>

                <SearchBox />
                
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
