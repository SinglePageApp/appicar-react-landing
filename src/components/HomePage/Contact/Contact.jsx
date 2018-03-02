import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="container">
          <div className="contact-heading">
            <h2>home-page.contact.contact</h2>
          </div>
          <div className="contact-form">
            <form action="#" method="post">
              <input type="text" name="Name" placeholder="home-page.contact.name" required="" />
              <input type="text" name="Email" placeholder="home-page.contact.email" required="" />
              <input type="text" name="Subject" placeholder="home-page.contact.subject" required="" />
              <textarea name="Message" placeholder="home-page.contact.message" required=""></textarea>
              <input type="submit" value="home-page.contact.send" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
