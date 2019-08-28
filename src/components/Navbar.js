import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            E-store
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ">
                <Link to="/" className="nav-link ">
                  Products <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="btn btn-outline-light ml-auto">
              <i className="fas fa-shopping-cart mr-2" />
              Cart
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
