import storesQuery from '../queries/StoresQuery';
import featuredStoresQuery from '../queries/FeaturedStoresQuery';
import storeQuery from '../queries/StoreQuery';
import storesByMenuItemQuery from '../queries/StoresByMenuItemQuery';


/** Limit of stores per request. */
const LIMIT = 24

/**
 * class :: StoreService
 *
 * Service for Store types.
 */
class StoreService {
  /**
   * Constructor.
   */
  constructor() {
    this.storesQuery = storesQuery;
    this.storeQuery = storeQuery;
    this.featuredStoresQuery = featuredStoresQuery;
    this.storesByMenuItemQuery = storesByMenuItemQuery;
    this.searchFrom404 = false
    this.skipCounter = 0
  }

  /**
   * Resets the skip counter.
   */
  resetSkipCounter() {
    this.skipCounter = 0
  }

  /**
   * Gets all the stores using pagination.
   *
   * @returns {any} GraphQL query for retrieving the stores from the API server.
   */
  getAll() {
    this.skipCounter += LIMIT

    return this.storesQuery;
  }

  /**
   * Gets all the featured stores.
   *
   * @returns {any} GraphQL query for retrieving the featured stores from the API server.
   */
  getAllFeatured() {
    return this.featuredStoresQuery;
  }

  /**
   * Gets an store from the API server by its URI.
   *
   * @returns {any} GraphQL query for retrieving the store from the API server.
   */
  getStore() {
    return this.storeQuery;
  }

  /**
   * Gets all the stores from the API server that have the given item in their menues.
   *
   * @param {Boolean} searchFrom404 True if the search was performed from the SearchBox component.
   * @returns {any} GraphQL query for retrieving the stores from the API server.
   */
  getAllByMenuItem(searchFrom404) {
    this.searchFrom404 = searchFrom404 || false

    return this.storesByMenuItemQuery;
  }
}

/**
 * Singleton implementation.
 */
export default (function () {
  /** StoreService instance reference. */
  let instance = null

  return {
    /**
     * Gets a unique instance of StoreService.
     *
     * @returns {StoreService} A unique instance of StoreService.
     */
    getInstance: function () {
      if (!instance) {
        instance = new StoreService()
      }
      return instance
    }
  }
})()
