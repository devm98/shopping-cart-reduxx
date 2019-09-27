import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions";

const FormOrder = props => {
  const changeValue = event => {
    props.changeValue({ [event.target.name]: event.target.value });
  };

  console.log(props.orders);
  return (
    <div className="col-lg-8">
      <h3>Billing Details</h3>
      <form className="row contact_form">
        <div className="col-md-6 form-group p_star">
          <label>Full name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={changeValue}
            value={props.orders.name}
          />
        </div>
        <div className="col-md-6 form-group p_star">
          <label>Phone:</label>
          <input
            className="form-control"
            type="phone"
            name="phoneNum"
            onChange={changeValue}
            value={props.orders.phone}
          />
        </div>

        {/* <div className="col-md-12 form-group p_star">
          <label>Province/city:</label>
          <select
            name="country"
            onChange={changeValue}
            value={props.orders.country}
          >
            <option value={1}>Ho Chi Minh</option>
            <option value={2}>Ha Noi</option>
            <option value={3}>An Giang</option>
          </select>
        </div> */}

        {/* <div className="col-md-12 form-group p_star">
          <label>District: </label>
          <select
            className="country_select"
            name="district"
            onChange={changeValue}
            value={props.orders.district}
          >
            <option value={1}>District 1</option>
            <option value={2}>District 2</option>
            <option value={4}>District 3</option>
          </select>
        </div> */}

        {/* <div className="col-md-12 form-group p_star">
          <label>Address: </label>
          <textarea
            className="form-control"
            name="address"
            onChange={changeValue}
            value={props.orders.address}
          />
        </div> */}

        {/* <div className="creat_account col-md-6 d-flex align-items-center">
          <input
            type="checkbox"
            id="f-option2"
            name="chbCreateAcc"
            onChange={changeValue}
            value={props.orders.chbCreateAcc}
            checked={props.orders.chbCreateAcc}
          />
          <label className="m-0 ml-2" htmlFor="f-option2">
            Create an account?
          </label>
        </div> */}

        {/* <div className="col-md-6 form-group p_star">
          <label>Password:</label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={changeValue}
            value={props.orders.password}
          />
        </div> */}
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ob => {
      dispatch(actions.changeValue(ob));
    },
    submitOrder: () => {
      dispatch(actions.submitOrder());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormOrder);
