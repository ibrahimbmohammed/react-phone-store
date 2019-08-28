import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import ListItem from "./ListItem";
import Title from "./Title";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="shop" title="item" />
            {/* static Component */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <ListItem key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
