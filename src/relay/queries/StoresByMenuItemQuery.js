import { graphql } from 'react-relay';

/**
 * Gets all the stores from the API server that have the given item in their menues.
 */
export default graphql`
  query StoresByMenuItemQuery($menuItem: String!, $menuItemCategory: String!) {
    stores (menuItemType: $menuItem, menuItemCategory: $menuItemCategory) {
      URI
      name
      category
      address
      city
      image
    }
  }
`;