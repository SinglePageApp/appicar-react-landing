import { graphql } from 'react-relay';


/**
 * Gets an store from the API server by its URI.
 */
export default graphql`
  query StoreQuery ($URI: String!) {
    store (URI: $URI) {
      name
      description {
        en
        es
        it
      }
      points
      category
      address
      city
      country
      lat
      lng
      image
      menu {
        items {
          food {
            name {
              en
              es
              it
            }
            category
            paymentMethods
            picture
            price {
              currency
              value
            }
          }
          drink {
            name {
              en
              es
              it
            }
            category
            paymentMethods
            picture
            price {
              currency
              value
            }
          }
        }
      }
      reviews {
        clientId
        clientName
        clientPicture
        date
        points
        text {
          en
          es
          it
        }
      }
    }
  }
`;