/**
 * @flow
 * @relayHash a2c44f8363cd398771fc08b6e64f7edb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FeaturedStoresQueryVariables = {||};
export type FeaturedStoresQueryResponse = {|
  +featuredStores: ?$ReadOnlyArray<?{|
    +URI: ?string,
    +name: ?string,
    +category: ?string,
    +address: ?string,
    +city: ?string,
    +image: ?string,
  |}>
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "featuredStores",
    "storageKey": null,
    "args": null,
    "concreteType": "Store",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "URI",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "category",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "address",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "city",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FeaturedStoresQuery",
  "id": null,
  "text": "query FeaturedStoresQuery {\n  featuredStores {\n    URI\n    name\n    category\n    address\n    city\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FeaturedStoresQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "FeaturedStoresQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8cf0b68c2cf5d9fc57e7bdcd7ea7f1ad';
module.exports = node;
