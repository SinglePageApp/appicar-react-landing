import React, { Component } from 'react';

import './Stores.css';

export default class Stores extends Component {
  render() {
    return (
      <div id="stores" class="special">
        <div class="container">
          <div class="special-heading">
            <h3 translate>home-page.stores.title</h3>
          </div>

          { this.isLoading ? (
              <GearsLoadingSpinner>loading-spinner.loading</GearsLoadingSpinner>
            ) : (
              <div class="special-grids">
                {
                  this.stores.map((store, key) => {
                    return (
                      <div class="col-md-4 w3l-special-grid" key={ key }>
                        { this.isRowOdd(key) ? ( // Odd Row
                            <div>
                              <div class="col-md-6 w3ls-special-img">
                                <div class="w3ls-special-text effect-1">
                                  <img class="storeImage" src={ store.image } alt={ store.name } />
                                </div>
                              </div>
                              <div class="col-md-6 agileits-special-info">
                                <h4>{ store.name }</h4>
                                <p>
                                  <b>{ store.description }</b>
                                  <br />{ store.address }, { store.city }
                                </p>
                              </div>
                              <div class="clearfix"></div>
                            </div>
                          ) : ( // Even Row
                            <div>
                              <div class="col-md-6 agileits-special-info">
                                <h4>{ store.name }</h4>
                                <p>
                                  <b>{ store.description }</b>
                                  <br />{ store.address }, { store.city }
                                </p>
                              </div>
                              <div class="col-md-6 w3ls-special-img">
                                <div class="w3ls-special-text effect-1">
                                  <img class="storeImage" src={ store.image } alt={ store.name } />
                                </div>
                              </div>
                              <div class="clearfix"></div>
                            </div>
                          )
                        }
                      </div>
                    );
                  })
                }
                <div class="clearfix"> </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
