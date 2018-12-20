import { graphql } from 'react-relay';


/**
 * Gets all the stores using pagination.
 */
export default graphql`
  query StoresQuery ($skip: Int!, $limit: Int!) {
    stores (skip: $skip, limit: $limit) {
      URI
      name
      category
      address
      city
      image
    }
    storesCount
  }
`;
