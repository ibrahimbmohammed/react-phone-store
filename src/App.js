import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import "./App.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </div>
    );
  }
}
