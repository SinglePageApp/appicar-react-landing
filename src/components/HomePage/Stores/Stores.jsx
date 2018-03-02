import React, { Component } from 'react';
import { Spinner } from 'react-spinkit';

import './Stores.css';

export default class Stores extends Component {

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
      <div id='stores' class='special'>
        <div class='container'>
          <div class='special-heading'>
            <h3 translate>home-page.stores.title</h3>
          </div>

          { this.isLoading ? (
              <Spinner name='line-scale' color='blue'/>
            ) : (
              <div class='special-grids'>
                {
                  this.stores.map((store, key) => {
                    return (
                      <div class='col-md-4 w3l-special-grid' key={ key }>
                        { this.isRowOdd(key) ? ( // Odd Row
                            <div>
                              <div class='col-md-6 w3ls-special-img'>
                                <div class='w3ls-special-text effect-1'>
                                  <img class='storeImage' src={ store.image } alt={ store.name } />
                                </div>
                              </div>
                              <div class='col-md-6 agileits-special-info'>
                                <h4>{ store.name }</h4>
                                <p>
                                  <b>{ store.description }</b>
                                  <br />{ store.address }, { store.city }
                                </p>
                              </div>
                              <div class='clearfix'></div>
                            </div>
                          ) : ( // Even Row
                            <div>
                              <div class='col-md-6 agileits-special-info'>
                                <h4>{ store.name }</h4>
                                <p>
                                  <b>{ store.description }</b>
                                  <br />{ store.address }, { store.city }
                                </p>
                              </div>
                              <div class='col-md-6 w3ls-special-img'>
                                <div class='w3ls-special-text effect-1'>
                                  <img class='storeImage' src={ store.image } alt={ store.name } />
                                </div>
                              </div>
                              <div class='clearfix'></div>
                            </div>
                          )
                        }
                      </div>
                    );
                  })
                }
                <div class='clearfix'> </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
