import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.details;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                <h2>mode : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 md-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}

                <Link to="/">
                  <div className="btn btn-info align-item-center mr-3">
                    back to products
                  </div>
                </Link>
                {/* buttons */}
                <button
                  className={
                    inCart ? "btn btn-primary ml-2 " : " btn btn-warning ml-2"
                  }
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? "in cart" : "add to cart"}
                </button>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
