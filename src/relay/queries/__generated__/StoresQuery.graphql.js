/**
 * @flow
 * @relayHash 6fc0c84e6d749c40cd36484b07818057
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StoresQueryVariables = {|
  skip: number,
  limit: number,
|};
export type StoresQueryResponse = {|
  +stores: ?$ReadOnlyArray<?{|
    +URI: ?string,
    +name: ?string,
    +category: ?string,
    +address: ?string,
    +city: ?string,
    +image: ?string,
  |}>,
  +storesCount: ?number,
|};
*/


/*
query StoresQuery(
  $skip: Int!
  $limit: Int!
) {
  stores(skip: $skip, limit: $limit) {
    URI
    name
    category
    address
    city
    image
  }
  storesCount
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "skip",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int!",
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
        "name": "limit",
        "variableName": "limit",
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "skip",
        "variableName": "skip",
        "type": "Int"
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
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "storesCount",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StoresQuery",
  "id": null,
  "text": "query StoresQuery(\n  $skip: Int!\n  $limit: Int!\n) {\n  stores(skip: $skip, limit: $limit) {\n    URI\n    name\n    category\n    address\n    city\n    image\n  }\n  storesCount\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoresQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "StoresQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96b482b13d2fc88403726e857c637b9b';
module.exports = node;
