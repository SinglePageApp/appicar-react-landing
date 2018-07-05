import React from 'react';
import Spinner from 'react-spinkit';

/**
 * FeaturedStores component.
 */
export default ({ error, props }) => {
  if (error) {
    return <div>Error!</div>;
  }

  if (!props) {
    return <Spinner name="line-scale" color="blue" />;
  }

  return (
    <div>
      {
        props.featuredStores.map((store, key) => {
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
    </div>
  );
}
