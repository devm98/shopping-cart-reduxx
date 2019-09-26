import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions";
const Product = props => {
  const handleAddToCart = () => {
    props.addToCart(
      {
        id: props.id,
        name: props.name,
        src: props.srcImg,
        price: props.price,
        quantity: 1
      },
      props.id
    );
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card text-center card-product">
        <div className="card-product__img">
          <img className="card-img" src={props.srcImg} alt="" />
          <ul className="card-product__imgOverlay">
            <li>
              <button>
                <i className="ti-search" />
              </button>
            </li>
            <li>
              {/* add_cart */}
              <button onClick={handleAddToCart}>
                <i className="ti-shopping-cart" />
              </button>
            </li>
            <li>
              <button>
                <i className="ti-heart" />
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <p>{props.type}</p>
          <h4 className="card-product__title">
            <NavLink to={`/productDetail/${props.id}`}>{props.name}</NavLink>
          </h4>
          <p className="card-product__price">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, id) => {
      dispatch(actions.addToCart(product, id));
    }
  };
};
const mapStateToProps = state => {
  return {
    product: state.products
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
