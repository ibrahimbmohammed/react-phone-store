import React, { Component } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="my" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return <Title name="cart" title=" empty" />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
