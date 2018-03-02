import React, { Component } from "react";

import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="input-group search-input">
          <span className="input-group-addon" id="basic-addon1">
            <span>searchbox.iWant</span>
            <button
              type="button"
              className="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>searchbox.eat</span>
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">
                  searchbox.eat
                </a>
              </li>
              <li>
                <a href="#">
                  searchbox.drink
                </a>
              </li>
            </ul>
          </span>
          <input type="text" className="form-control" placeholder="..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              searchbox.go
            </button>
          </span>
        </div>
      </div>
    );
  }
}
