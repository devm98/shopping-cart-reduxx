import React from "react";
import { NavLink } from "react-router-dom";
import ProductOnCart from "./ProductOnCart";
import { connect } from "react-redux";
import * as actions from "./../../actions";
import Banner from "../Banner";
const Cart = props => {
  const getTotal = (price, quantity) => {
    return price * quantity;
  };

  const getSubTotal = () => {
    let total = 0;
    for (let i = 0; i < props.carts.length; i++) {
      total += props.carts[i].quantity * props.carts[i].price;
    }
    return total;
  };

  getSubTotal();
  return (
    <div>
      <Banner title="Shopping Cart" />
      {/* ================ end banner area ================= */}
      {/*================Cart Area =================*/}
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <div>
                {props.carts.length > 0 ? (
                  <button
                    onClick={props.updateCart}
                    className="btn btn-success m-4"
                    to="#"
                  >
                    Update Cart
                  </button>
                ) : null}
              </div>
              {props.carts.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th className="text-center">Total</th>
                      {props.show ? (
                        <th>
                          <button className="btn btn-danger">
                            Remove ({props.carts.length})
                          </button>
                        </th>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody>
                    {props.carts.map(item => {
                      return (
                        <ProductOnCart
                          id={item.id}
                          key={item.id}
                          name={item.name}
                          srcImg={item.src}
                          price={item.price}
                          quantity={item.quantity}
                          total={getTotal(item.price, item.quantity)}
                        />
                      );
                    })}
                    <tr>
                      <td />
                      <td />
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td className="text-center">
                        <h5>{getSubTotal()}.000</h5>
                      </td>
                    </tr>
                    <tr className="bottom_button">
                      <td></td>
                      <td />
                      <td />
                      <td>
                        <NavLink to="/checkout">
                          <button
                            style={{ width: "100px", borderRadius: "30px" }}
                            className="btn btn-primary"
                          >
                            Apply
                          </button>
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className="text-center">
                  <NavLink
                    onClick={props.defaultState()}
                    className="button button-header"
                    to="/"
                  >
                    Buy Now
                  </NavLink>
                </div>
              )}
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
    show: state.carts.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: () => {
      dispatch(actions.updateCart());
    },
    defaultState: () => {
      dispatch(actions.defaultState());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
