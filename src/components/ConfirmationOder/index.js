import React from "react";
import Banner from "../Banner";
import { connect } from "react-redux";
import * as actions from "./../../actions";
const ConfirmationmOrder = props => {
  return (
    <div>
      <Banner title="Order Confirmation" />
      <section className="order_details section-margin--small">
        <div className="container">
          <p className="text-center billing-alert">
            Thank you. Your order has been received.
          </p>
          <div className="row mb-5">
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Order Info</h3>
                <table className="order-rable">
                  <tbody>
                    <tr>
                      <td>Customer name:</td>
                      <td>{props.orders.fullName}</td>
                    </tr>
                    <tr>
                      <td>Phone: </td>
                      <td>{props.orders.phoneNum}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>: USD 2210</td>
                    </tr>
                    <tr>
                      <td>Payment method</td>
                      <td>: Check payments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Billing Address</h3>
                <table className="order-rable">
                  <tbody>
                    <tr>
                      <td>Street</td>
                      <td>: 56/8 panthapath</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>: Dhaka</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>: Bangladesh</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>: 1205</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Shipping Address</h3>
                <table className="order-rable">
                  <tbody>
                    <tr>
                      <td>Street</td>
                      <td>: 56/8 panthapath</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>: Dhaka</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>: Bangladesh</td>
                    </tr>
                    <tr>
                      <td>Postcode</td>
                      <td>: 1205</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="order_details_table">
            <h2>Order Details</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {props.carts.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <p>{item.name}</p>
                        </td>
                        <td>
                          <h5>x {item.quantity}</h5>
                        </td>
                        <td>
                          <p>{item.price}.000</p>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>
                      <h4>Shipping</h4>
                    </td>
                    <td></td>
                    <td>
                      <p>{actions.discountOrder(props.carts)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Total</h4>
                    </td>
                    <td></td>
                    <td>
                      <h4>
                        {actions.getSubTotal(props.carts) +
                          parseInt(actions.discountOrder(props.carts))}
                        .000
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carts: state.carts.carts,
    orders: state.orders
  };
};

export default connect(
  mapStateToProps,
  null
)(ConfirmationmOrder);
