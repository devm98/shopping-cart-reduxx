import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions";
const OrderInfo = props => {
  const submitOrder = () => {
    props.submitOrder();
  };
  return (
    <div className="col-lg-4">
      <div className="order_box">
        <h2>Your Order</h2>
        <ul className="list">
          <li>
            <h4 className="d-flex justify-content-between">
              <span>Product</span>
              <span>Total</span>
            </h4>
          </li>
          {props.carts.map(item => {
            return (
              <li
                key={item.id}
                className="d-flex justify-content-between pb-2 pt-2"
              >
                <span style={{ maxWidth: "125px" }}>{item.name}</span>
                <span className="middle">x{item.quantity}</span>{" "}
                <span className="last">{item.price * item.quantity}.000</span>
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="list list_2">
          <li className="d-flex justify-content-between">
            Subtotal <span>{actions.getSubTotal(props.carts)}.000</span>
          </li>
          <li className="d-flex justify-content-between">
            Shipping <span>{actions.discountOrder(props.carts)}</span>
          </li>
          <hr />
          <li className="d-flex justify-content-between">
            Total
            <span>
              {actions.getTotal(props.carts)}
              .000
            </span>
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
        <div className="creat_account d-flex align-items-center">
          <input type="checkbox" id="f-option4" name="selector" />
          <label htmlFor="f-option4" className="m-0">
            I’ve read and accept the{" "}
            <NavLink to="#">terms &amp; conditions*</NavLink>
          </label>
        </div>
        <div className="text-center">
          <NavLink
            onClick={submitOrder}
            className="button button-paypal"
            to="/order"
          >
            Proceed to Paypal
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carts: state.carts.carts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    submitOrder: () => {
      dispatch(actions.submitOrder());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderInfo);
