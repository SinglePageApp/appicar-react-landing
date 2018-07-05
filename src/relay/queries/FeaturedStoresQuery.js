import { graphql } from 'react-relay';


/**
 * Gets all the featured stores.
 */
export default graphql`
  query FeaturedStoresQuery {
    featuredStores {
      URI
      name
      category
      address
      city
      image
    }
  }
`;
