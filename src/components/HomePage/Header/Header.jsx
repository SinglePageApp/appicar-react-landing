import React, { Component } from 'react';
import { Spinner } from 'react-spinkit';

import SearchBox from '../../SearchBox/SearchBox';

import './Header.css';

export default class Header extends Component {

  constructor() {
    super();
    this.isLoading = true;
    
    this.stores = [{
      _id: 'ZPoYEMmanZgmFvYpC',
      name: 'LeRot',
      date: 'Fri Aug 04 2017 22:29:52 GMT-0300 (-03)',
      description: 'Restaurant / Bar',
      address: 'Av. Arístides Villanueva 263',
      city: 'Mendoza',
      featured: true,
      lat: -32.8921938,
      lng: -68.8562777,
      image: 'https://scontent.fsst1-2.fna.fbcdn.net/v/t1.0-9/549912_545086052190044_760590764_n.jpg?oh=44eaa03704f9133e583c4db036273d4d&oe=5B456457'
    }];
  }

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
              <h2>home-page.header.title</h2>
              <p>home-page.header.description</p>
            </div>
            { this.isLoading ? (
              <Spinner name="line-scale" color="blue" />
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
    );
  }
}
