import React, { Component } from 'react';

import Header from './Header/Header';
import Stores from './Stores/Stores';
import Services from './Services/Services';
import Contact from './Contact/Contact';

import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <Stores />
        <Services />
        <Reviews />
        <Contact />
      </div>
    )
  }
}
