import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

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
      <div className="app">
        <Switch>
          <MainNav />
          <Route exact path="/about" component={ AboutPage } />
          <Route exact path="/404" component={ Error404 } />
          <Route path="/" component={ HomePage } />
        </Switch>
        <Logo />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default App;
