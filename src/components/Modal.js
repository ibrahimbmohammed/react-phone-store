import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import styled from "styled-components";

export default class extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 textt-center textt-capitalize p-5 "
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link
                        to="/"
                        className="btn btn-info mx-auto"
                        onClick={() => closeModal()}
                      >
                        products
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-warning mx-auto"
                        onClick={() => closeModal()}
                      >
                        go to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;
