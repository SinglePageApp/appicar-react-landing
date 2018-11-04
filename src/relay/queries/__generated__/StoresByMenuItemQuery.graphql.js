/**
 * @flow
 * @relayHash eaf48b7d4195c912cb85eb2a167788dd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StoresByMenuItemQueryVariables = {|
  menuItem: string,
  menuItemCategory: string,
|};
export type StoresByMenuItemQueryResponse = {|
  +stores: ?$ReadOnlyArray<?{|
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
query StoresByMenuItemQuery(
  $menuItem: String!
  $menuItemCategory: String!
) {
  stores(menuItemType: $menuItem, menuItemCategory: $menuItemCategory) {
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
    "kind": "LocalArgument",
    "name": "menuItem",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "menuItemCategory",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stores",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "menuItemCategory",
        "variableName": "menuItemCategory",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "menuItemType",
        "variableName": "menuItem",
        "type": "String"
      }
    ],
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
  "name": "StoresByMenuItemQuery",
  "id": null,
  "text": "query StoresByMenuItemQuery(\n  $menuItem: String!\n  $menuItemCategory: String!\n) {\n  stores(menuItemType: $menuItem, menuItemCategory: $menuItemCategory) {\n    URI\n    name\n    category\n    address\n    city\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoresByMenuItemQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "StoresByMenuItemQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a31cd8bf130086c7aec5108317c85378';
module.exports = node;
