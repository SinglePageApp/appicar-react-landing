import React, { Component } from "react";

import MainNav from './MainNav/MainNav';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <Logo />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default App;
