import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner";
import { connect } from "react-redux";
import * as actions from "./../../actions";
const ProductDetail = props => {
  const handleAddToCart = () => {
    props.addToCart(
      {
        id: props.products[findMe()].id,
        name: props.products[findMe()].name,
        src: props.products[findMe()].src,
        price: `${props.products[findMe()].price}.000`,
        quantity: 1
      },
      props.products[findMe()].id
    );
  };
  const findMe = () => {
    const id = props.match.params.id;
    const index = props.products.findIndex(item => {
      return item.id === parseInt(id);
    });
    return index;
  };

  return (
    <div>
      <Banner title="Product Detail" />
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="single-prd-item">
              <img
                className="img-fluid"
                src={props.products[findMe()].src}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
            <div className="s_product_text">
              <h3>{props.products[findMe()].name}</h3>
              <h2>{props.products[findMe()].price}.000</h2>
              <ul className="list"></ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <NavLink
                onClick={handleAddToCart}
                className="button primary-btn"
                to="/cart"
              >
                Add to cart
              </NavLink>
              <div className="card_area d-flex align-items-center">
                <NavLink className="icon_btn" to="#">
                  <i className="lnr lnr lnr-diamond" />
                </NavLink>
                <NavLink className="icon_btn" to="#">
                  <i className="lnr lnr lnr-heart" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product_description_area"></section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, id) => {
      dispatch(actions.addToCart(product, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
