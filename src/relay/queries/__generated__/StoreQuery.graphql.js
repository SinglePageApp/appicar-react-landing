/**
 * @flow
 * @relayHash aec7270c876f0cf534bca33a4167c07f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StoreQueryVariables = {|
  URI: string
|};
export type StoreQueryResponse = {|
  +store: ?{|
    +name: ?string,
    +description: ?{|
      +en: ?string,
      +es: ?string,
      +it: ?string,
    |},
    +points: ?number,
    +category: ?string,
    +address: ?string,
    +city: ?string,
    +country: ?string,
    +lat: ?number,
    +lng: ?number,
    +image: ?string,
    +menu: ?{|
      +items: ?{|
        +food: ?$ReadOnlyArray<?{|
          +name: ?{|
            +en: ?string,
            +es: ?string,
            +it: ?string,
          |},
          +category: ?string,
          +paymentMethods: ?$ReadOnlyArray<?string>,
          +picture: ?string,
          +price: ?$ReadOnlyArray<?{|
            +currency: ?string,
            +value: ?number,
          |}>,
        |}>,
        +drink: ?$ReadOnlyArray<?{|
          +name: ?{|
            +en: ?string,
            +es: ?string,
            +it: ?string,
          |},
          +category: ?string,
          +paymentMethods: ?$ReadOnlyArray<?string>,
          +picture: ?string,
          +price: ?$ReadOnlyArray<?{|
            +currency: ?string,
            +value: ?number,
          |}>,
        |}>,
      |}
    |},
    +reviews: ?$ReadOnlyArray<?{|
      +clientId: ?string,
      +clientName: ?string,
      +clientPicture: ?string,
      +date: ?string,
      +points: ?number,
      +text: ?{|
        +en: ?string,
        +es: ?string,
        +it: ?string,
      |},
    |}>,
  |}
|};
*/


/*
query StoreQuery(
  $URI: String!
) {
  store(URI: $URI) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "URI",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "en",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "es",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "it",
    "args": null,
    "storageKey": null
  }
],
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "Translatable",
    "plural": false,
    "selections": v3
  },
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "paymentMethods",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "picture",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "price",
    "storageKey": null,
    "args": null,
    "concreteType": "Price",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "currency",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "store",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "URI",
        "variableName": "URI",
        "type": "String"
      }
    ],
    "concreteType": "Store",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "country",
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
      v1,
      v2,
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
        "kind": "LinkedField",
        "alias": null,
        "name": "description",
        "storageKey": null,
        "args": null,
        "concreteType": "Translatable",
        "plural": false,
        "selections": v3
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lat",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lng",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "menu",
        "storageKey": null,
        "args": null,
        "concreteType": "Menu",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "MenuItem",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "food",
                "storageKey": null,
                "args": null,
                "concreteType": "Food",
                "plural": true,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "drink",
                "storageKey": null,
                "args": null,
                "concreteType": "Drink",
                "plural": true,
                "selections": v4
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "reviews",
        "storageKey": null,
        "args": null,
        "concreteType": "Review",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "clientId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "clientName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "clientPicture",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "text",
            "storageKey": null,
            "args": null,
            "concreteType": "Translatable",
            "plural": false,
            "selections": v3
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StoreQuery",
  "id": null,
  "text": "query StoreQuery(\n  $URI: String!\n) {\n  store(URI: $URI) {\n    name\n    description {\n      en\n      es\n      it\n    }\n    points\n    category\n    address\n    city\n    country\n    lat\n    lng\n    image\n    menu {\n      items {\n        food {\n          name {\n            en\n            es\n            it\n          }\n          category\n          paymentMethods\n          picture\n          price {\n            currency\n            value\n          }\n        }\n        drink {\n          name {\n            en\n            es\n            it\n          }\n          category\n          paymentMethods\n          picture\n          price {\n            currency\n            value\n          }\n        }\n      }\n    }\n    reviews {\n      clientId\n      clientName\n      clientPicture\n      date\n      points\n      text {\n        en\n        es\n        it\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StoreQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v5
  },
  "operation": {
    "kind": "Operation",
    "name": "StoreQuery",
    "argumentDefinitions": v0,
    "selections": v5
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0756bfe43ade21d679389faaed09693e';
module.exports = node;
