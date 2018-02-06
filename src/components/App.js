import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */} 
        <div className="background">
          <div className="banner">
            <div className="container">
              <div className="header">
                <div className="logo">
                  <h1>
                    <a href="index.html">
                      <img alt="Appicar" src="images/logo.svg" />
                    </a>
                  </h1>
                </div>
                <div className="top-nav">
                  <nav className="navbar navbar-default">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                    >
                      Menu
                    </button>
                    {/* NavMenu */} 
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li>
                          <a className="active" href="index.html">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="#stores">Stores</a>
                        </li>
                        <li>
                          <a className="nav-my-account" href="http://my-react.appicar.com">
                            My Account
                          </a>
                        </li>
                        <li>
                          <a href="#services">Services</a>
                        </li>
                        <li>
                          <a href="#reviews">Reviews</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                        <li className="flags">
                          <a href="#">
                            <span className="flag-icon flag-icon-us" />
                          </a>
                          <a href="#">
                            <span className="flag-icon flag-icon-es" />
                          </a>
                          <a href="#">
                            <span className="flag-icon flag-icon-it" />
                          </a>
                        </li>
                        <div className="clearfix"> </div>
                      </ul>
                    </div>
                    {/* /NavMenu */} 
                  </nav>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="banner-info">
                <h2>Your online booking and delivery platform</h2>
                <p>
                  Download now the app for your cell phone and let us take care
                  of the whole process of reservations and orders for delivery
                  so you can enjoy more of your outings or relax at home while
                  you're waiting for your order.
                </p>
              </div>
              <div className="banner-grads">
                <div className="col-md-4 banner-grad">
                  <div className="banner-grad-img">
                    <img src="images/b1.jpg" alt="" />
                    <h4>Lerot</h4>
                    <p>
                      <span className="storeDescription">Restaurant / Bar</span>
                      <br /> Av. Arístides Villanueva 263
                    </p>
                  </div>
                </div>
                <div className="col-md-4 banner-grad">
                  <div className="banner-grad-img">
                    <img src="images/b2.jpg" alt="" />
                    <h4>Antares</h4>
                    <p>
                      <span className="storeDescription">Bar</span>
                      <br /> Av. Arístides Villanueva 153
                    </p>
                  </div>
                </div>
                <div className="col-md-4 banner-grad">
                  <div className="banner-grad-img">
                    <img src="images/b3.jpg" alt="" />
                    <h4>ZiTTo</h4>
                    <p>
                      <span className="storeDescription">Restaurant</span>
                      <br />Av. Arístides Villanueva 257
                    </p>
                  </div>
                </div>
                <div className="clearfix"> </div>
                {/* SearchBox */} 
                <div className="search-box">
                  <div className="input-group search-input">
                    <span className="input-group-addon" id="basic-addon1">
                      Today, I want to
                      <button
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        eat
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">eat</a>
                        </li>
                        <li>
                          <a href="#">drink</a>
                        </li>
                      </ul>
                    </span>
                    <input type="text" className="form-control" placeholder="..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
                {/* /SearchBox */} 
              </div>
            </div>
          </div>
        </div>
        {/* //Header */}  {/* Stores */} 
        <div id="stores" className="special">
          <div className="container">
            <div className="special-heading">
              <h3>Our Stores</h3>
            </div>
            <div className="special-grids">
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 w3ls-special-img">
                  <div className="w3ls-special-text effect-1">
                    <img className="storeImage" src="images/s1.jpg" alt="Lerot" />
                  </div>
                </div>
                <div className="col-md-6 agileits-special-info">
                  <h4>LeRot</h4>
                  <p>
                    <b>Restaurant / Bar</b>
                    <br />Av. Arístides Villanueva 263
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 w3ls-special-img">
                  <div className="w3ls-special-text effect-1">
                    <img className="storeImage" src="images/s2.jpg" alt="Lerot" />
                  </div>
                </div>
                <div className="col-md-6 agileits-special-info">
                  <h4>Antares</h4>
                  <p>
                    <b>Bar</b>
                    <br />Av. Arístides Villanueva 263
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 w3ls-special-img">
                  <div className="w3ls-special-text effect-1">
                    <img className="storeImage" src="images/s3.jpg" alt="Lerot" />
                  </div>
                </div>
                <div className="col-md-6 agileits-special-info">
                  <h4>ZiTTo</h4>
                  <p>
                    <b>Restaurant</b>
                    <br />Av. Arístides Villanueva 263
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 agileits-special-info">
                  <h4>Aliquam</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-md-6 w3ls-special-img wthree-img2">
                  <div className="w3ls-special-text effect-1">
                    <h4>Aliquam</h4>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 agileits-special-info">
                  <h4>Nullam</h4>
                  <p>Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-md-6 w3ls-special-img wthree-img3">
                  <div className="w3ls-special-text effect-1">
                    <h4>Nullam</h4>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-md-4 w3l-special-grid">
                <div className="col-md-6 agileits-special-info">
                  <h4>Maecenas</h4>
                  <p>
                    Donec nibh enim, cursus sodales laoreet sit amet, tincidunt
                  </p>
                </div>
                <div className="col-md-6 w3ls-special-img wthree-img4">
                  <div className="w3ls-special-text effect-1">
                    <h4>Maecenas</h4>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //Stores */}  {/* Services */} 
        <div id="services" className="features">
          <div className="container">
            <div className="features-heading">
              <h3>Our Services</h3>
            </div>
            <div className="features-grids">
              <div className="col-md-4 features-left">
                <div className="features-left-info" />
              </div>
              <div className="col-md-8 features-right">
                <div className="features-right-info">
                  <h4>
                    We offer you a range of amazing services that will
                    revolutionize your experience as a customer:
                  </h4>
                </div>
                <div className="features-right-grids">
                  <div className="features-right-left" title="Tell me more!">
                    <div className="features-right-icon effect-2">
                      <i className="fa fa-users" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="features-right-right">
                    <p>
                      <b>Group reservations</b> so you can enjoy your outings
                      with your family or friends. The bill can be divided
                      individually between the diners or you can pay for all or
                      some of them. You're free to choose!
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="features-right-grids">
                  <div className="features-right-left" title="Tell me more!">
                    <div className="features-right-icon effect-2">
                      <i className="fa fa-book" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="features-right-right">
                    <p>
                      <b>Consult the menu</b> and
                      <b>order</b> what you want. You won't have to wait no
                      longer for the waiter to come to your table and take your
                      order!
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="features-right-grids">
                  <div className="features-right-left" title="Tell me more!">
                    <div className="features-right-icon effect-2">
                      <i className="fa fa-credit-card" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="features-right-right">
                    <p>
                      <b>Pay your order</b> from your cellphone and you won't
                      have to ask for the bill and wait no longer for the waiter
                      to come and charge you. Available payment methods are:
                      <i>cash</i>,
                      <i>credit cards</i>,
                      <i>bank transfers</i>,
                      <i>payment networks</i> and
                      <i>online payment systems</i>.
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="features-right-grids">
                  <div className="features-right-left" title="Tell me more!">
                    <div className="features-right-icon effect-2">
                      <i className="fa fa-search" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="features-right-right">
                    <p>
                      <b>Smart search</b>. You can find your destination by
                      <i>proximity</i> using your cellphone's GPS or you can
                      filter stores by
                      <i>food</i> or
                      <i>drink</i> offered.
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //Services */}  {/* Reviews */} 
        <div id="reviews" className="customer">
          <div className="container">
            <div className="customer-heading">
              <h3>What Our Customers are Saying</h3>
            </div>
            <div className="customer-heading-grids">
              <div className="col-md-4 customer-grid">
                <div className="customer-info">
                  <p>
                    Etiam euismod leo in felis imperdiet, non interdum diam
                    egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                    sit amet nibh non tortor posuere mollis non vel velit.
                    Praesent porttitor elit nec dapibus bibendum.
                  </p>
                </div>
                <div className="customer-img">
                  <img src="images/c1.jpg" alt="" />
                  <h5>Dapibus</h5>
                </div>
              </div>
              <div className="col-md-4 customer-grid">
                <div className="customer-info">
                  <p>
                    Etiam euismod leo in felis imperdiet, non interdum diam
                    egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                    sit amet nibh non tortor posuere mollis non vel velit.
                    Praesent porttitor elit nec dapibus bibendum.
                  </p>
                </div>
                <div className="customer-img">
                  <img src="images/c2.jpg" alt="" />
                  <h5>Vulputate</h5>
                </div>
              </div>
              <div className="col-md-4 customer-grid">
                <div className="customer-info">
                  <p>
                    Etiam euismod leo in felis imperdiet, non interdum diam
                    egestas. Aliquam non ex eget lorem vulputate auctor. Etiam
                    sit amet nibh non tortor posuere mollis non vel velit.
                    Praesent porttitor elit nec dapibus bibendum.
                  </p>
                </div>
                <div className="customer-img">
                  <img src="images/c3.jpg" alt="" />
                  <h5>Interdum</h5>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* //Reviews */}  {/* Contact */} 
        <div id="contact" className="contact">
          <div className="container">
            <div className="contact-heading">
              <h2>Contact</h2>
            </div>
            <div className="contact-form">
              <form action="#" method="post">
                <input type="text" name="Name" placeholder="Name" required="" />
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  required=""
                />
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required=""
                />
                <textarea name="Message" placeholder="Message" required="" />
                <input type="submit" value="SEND" />
              </form>
            </div>
          </div>
        </div>
        {/* //Contact */}  {/* Footer */} 
        <div className="footer">
          <div className="container">
            <div className="footer-grids">
              <div className="footer-heading">
                <h3>Get in touch with us</h3>
              </div>
              <div className="footer-icons">
                <ul>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <span>Twitter</span>
                  </li>
                  <li>
                    <a href="#" className="twitter facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <span>Facebook</span>
                  </li>
                  <li>
                    <a href="#" className="twitter chrome">
                      <i className="fa fa-google-plus" />
                    </a>
                    <span>Google+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* //Footer */}  {/* Copyright */} 
        <div className="copyright">
          <div className="container">
            <div className="w3agile-list">
              <ul>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#stores">Stores</a>
                </li>
                <li>
                  <a href="#" className="nav-my-account">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="agileinfo">
              <p>
                © 2017 Appicar. All Rights Reserved. Design by
                <a href="http://w3layouts.com/">W3layouts</a>
              </p>
            </div>
          </div>
        </div>
        {/* //Copyright */} 
      </div>
    );
  }
}

export default App;
