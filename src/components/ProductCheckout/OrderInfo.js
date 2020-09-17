import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions";
const OrderInfo = props => {
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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carts: state.carts.carts
  };
};

export default connect(
  mapStateToProps,
  null
)(OrderInfo);
