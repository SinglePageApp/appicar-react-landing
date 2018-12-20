import React from 'react';
import { I18n } from 'react-i18next';
import Spinner from 'react-spinkit';

/**
 * Stores List component.
 */
export default ({ error, props }) => {
  if (error) {
    return <div className="special-grids">Error!</div>;
  }

  if (!props) {
    return <Spinner name="line-scale" color="blue" />;
  }

  return (
    <div className="special-grids">
      <I18n>
        {
          (t) => props.stores.map((store, key) => {
            return (
              <div className="col-md-4 w3l-special-grid" key={ key }>
                { isRowOdd(key) ? ( // Odd Row
                    <div>
                      <div className="col-md-6 w3ls-special-img">
                        <div className="w3ls-special-text effect-1">
                          <img className="storeImage" src={ store.image } alt={ store.name } />
                        </div>
                      </div>
                      <div className="col-md-6 agileits-special-info">
                        <h4>{ store.name }</h4>
                        <p>
                          <b>{ t(store.category) }</b>
                          <br />{ store.address }, { store.city }
                        </p>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  ) : ( // Even Row
                    <div>
                      <div className="col-md-6 agileits-special-info">
                        <h4>{ store.name }</h4>
                        <p>
                          <b>{ t(store.category) }</b>
                          <br />{ store.address }, { store.city }
                        </p>
                      </div>
                      <div className="col-md-6 w3ls-special-img">
                        <div className="w3ls-special-text effect-1">
                          <img className="storeImage" src={ store.image } alt={ store.name } />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  )
                }
              </div>
            );
          })
        }
      </I18n>
    </div>
  );
}

/**
 * Determines if a row is odd based on the number of the i-th element passed by parameters.
 *
 * @param {int} i Number of the i-th element.
 * @returns {boolean} true - if the row is odd.
 *                    false - if the row is even.
 */
function isRowOdd(i) {
  const row = Math.floor(i / 3)

  return (row % 2 === 0)
}
