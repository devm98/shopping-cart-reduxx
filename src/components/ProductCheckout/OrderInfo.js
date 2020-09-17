import React from "react";
import { NavLink } from "react-router-dom";

const OrderInfo = () => {
  return (
    <div className="col-lg-4">
      <div className="order_box">
        <h2>Your Order</h2>
        <ul className="list">
          <li>
            <a href="#">
              <h4>
                Product <span>Total</span>
              </h4>
            </a>
          </li>
          <li>
            <a href="#">
              Fresh Blackberry <span className="middle">x 02</span>{" "}
              <span className="last">$720.00</span>
            </a>
          </li>
          <li>
            <a href="#">
              Fresh Tomatoes <span className="middle">x 02</span>{" "}
              <span className="last">$720.00</span>
            </a>
          </li>
          <li>
            <a href="#">
              Fresh Brocoli <span className="middle">x 02</span>{" "}
              <span className="last">$720.00</span>
            </a>
          </li>
        </ul>
        <ul className="list list_2">
          <li>
            <a href="#">
              Subtotal <span>$2160.00</span>
            </a>
          </li>
          <li>
            <a href="#">
              Shipping <span>Flat rate: $50.00</span>
            </a>
          </li>
          <li>
            <a href="#">
              Total <span>$2210.00</span>
            </a>
          </li>
        </ul>
        <div className="payment_item">
          <div className="radion_btn">
            <input type="radio" id="f-option5" name="selector" />
            <label htmlFor="f-option5">Check payments</label>
            <div className="check" />
          </div>
          <p>
            Please send a check to Store Name, Store Street, Store Town, Store
            State / County, Store Postcode.
          </p>
        </div>
        <div className="payment_item active">
          <div className="radion_btn">
            <input type="radio" id="f-option6" name="selector" />
            <label htmlFor="f-option6">Paypal </label>
            <img src="img/product/card.jpg" alt="" />
            <div className="check" />
          </div>
          <p>
            Pay via PayPal; you can pay with your credit card if you don’t have
            a PayPal account.
          </p>
        </div>
        <div className="creat_account">
          <input type="checkbox" id="f-option4" name="selector" />
          <label htmlFor="f-option4">I’ve read and accept the </label>
          <a href="#">terms &amp; conditions*</a>
        </div>
        <div className="text-center">
          <NavLink className="button button-paypal" to="/order">
            Proceed to Paypal
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default OrderInfo;
