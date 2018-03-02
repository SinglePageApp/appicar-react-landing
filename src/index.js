import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={ history }>
    <App />
  </Router>
, document.getElementById('root'));

registerServiceWorker();