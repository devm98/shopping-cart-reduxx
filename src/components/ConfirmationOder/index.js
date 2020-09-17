import React from "react";
import Banner from "../Banner";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "./../../actions";
const ConfirmationmOrder = props => {
  const clearCart = () => {
    props.clearCart();
  };
  return (
    <div>
      <Banner title="Order Confirmation" />
      <section className="order_details section-margin--small">
        <div className="container">
          <p className="text-center billing-alert">
            Thank you. Your order has been received.
          </p>
          <div className="row mb-5">
            <div className="col-md-12 col-xl-12 mb-4 mb-xl-0">
              <div className="confirmation-card">
                <h3 className="billing-title">Order Info</h3>
                <table className="order-rable">
                  <tbody>
                    <tr>
                      <td>Customer Name:</td>
                      <td>{props.orders.txtName}</td>
                    </tr>
                    <tr>
                      <td>Phone: </td>
                      <td>{props.orders.txtPhone}</td>
                    </tr>
                    <tr>
                      <td>City: </td>
                      <td>{props.orders.txtCity}</td>
                    </tr>
                    <tr>
                      <td>District: </td>
                      <td>{props.orders.txtDistrict}</td>
                    </tr>
                    <tr>
                      <td>Address: </td>
                      <td>{props.orders.txtAddress}</td>
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
                          <p>{item.price * item.quantity}</p>
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
                        {actions.getTotal(props.carts)}
                        .000
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <button
              style={{ padding: 0 }}
              onClick={clearCart}
              className="btn btn-info my-3"
              type="submit"
            >
              <NavLink style={{ padding: "7px 20px", color: "white" }} to="/">
                Back to buy
              </NavLink>
            </button>
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
const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => {
      dispatch(actions.clearCart());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationmOrder);
