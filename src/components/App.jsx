import React, { Component } from "react";
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainNav from './MainNav/MainNav';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import Error404 from './Error404/Error404';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory() }>
        <div>
          <MainNav />
          <Logo />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/about" component={ AboutPage } />
            <Route exact path="/404" component={ Error404 } />
          </Switch>
          <Footer />
          <Copyright />
        </div>
      </Router>
    );
  }
}

export default App;
