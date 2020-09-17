import React from "react";
import Banner from "./../Banner";
import FormOrder from "./FormOrder";
import OrderInfo from "./OrderInfo";
const Checkout = () => {
  return (
    <div>
      <Banner title="Product Checkout" />
      <section className="checkout_area section-margin--small">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <FormOrder />
              <OrderInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
