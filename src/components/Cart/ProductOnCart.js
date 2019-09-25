import { connect } from "react-redux";
import React from "react";
import * as actions from "./../../actions";
const ProductOnCart = props => {
  const removeCart = () => {
    props.removeFromCart(props.id);
  };
  const increaseQuantity = () => {
    props.increaseQuantity(props.id);
  };
  const reducedQuantity = () => {
    props.reducedQuantity(props.id);
  };
  return (
    <>
      <tr>
        <td>
          <div className="media">
            <div className="d-flex">
              <img style={{ maxWidth: "20%" }} src={props.srcImg} alt="" />
              <div className="media-body pl-5">
                <p>{props.name}</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <h5>{props.price}</h5>
        </td>
        <td>
          <div className="product_count d-flex">
            <p className="mt-2">{props.quantity}</p>
            <div>
              <button onClick={increaseQuantity} type="button">
                <i className="fas fa-plus-square"></i>
              </button>
              <button
                onClick={reducedQuantity}
                style={{ bottom: "-3px" }}
                type="button"
              >
                <i className="fas fa-minus-square"></i>
              </button>
            </div>
          </div>
        </td>
        <td className="text-center">
          <h5>{props.total}.000</h5>
        </td>
        {props.show ? (
          <td>
            <button onClick={removeCart} className="btn btn-danger">
              <i className="fas fa-trash"></i>
            </button>
          </td>
        ) : null}
      </tr>
    </>
  );
};

const mapStateToProps = state => {
  return {
    show: state.carts.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch(actions.removeFromCart(id));
    },
    increaseQuantity: id => {
      dispatch(actions.increaseQuantity(id));
    },
    reducedQuantity: id => {
      dispatch(actions.reducedQuantity(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOnCart);
