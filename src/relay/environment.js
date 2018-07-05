import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import config from '../config.json';


const CONFIG = config[process.env.NODE_ENV];
console.log(CONFIG.API_SERVER);

function fetchQuery(
  operation,
  variables,
) {
  return fetch(CONFIG.API_SERVER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;
