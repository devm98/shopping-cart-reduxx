import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions";
import { Link } from "react-router-dom";
class FormOrder extends Component {
  state = {
    txtName: "",
    txtPhone: "",
    txtCity: "Ho Chi Minh",
    txtDistrict: "Cho Moi 1",
    txtAddress: "",
    txtChecked: false,
    txtPassword: ""
  };
  handleChangeValue = e => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setStateToReducer(this.state);
  };

  render() {
    return (
      <div className="col-lg-8">
        <h3>Billing Details</h3>
        <form className="row contact_form" onSubmit={this.handleSubmit}>
          <div className="col-md-6 form-group p_star">
            <label>Full name:</label>
            <input
              className="form-control"
              type="text"
              name="txtName"
              onChange={this.handleChangeValue}
              value={this.state.txtName}
            />
          </div>

          <div className="col-md-6 form-group p_star">
            <label>Phone:</label>
            <input
              className="form-control"
              type="text"
              name="txtPhone"
              onChange={this.handleChangeValue}
              value={this.state.txtPhone}
            />
          </div>
          <div className="col-md-12 form-group ">
            <label>Province/city:</label>
            <select
              id="txtCity"
              className="country_select form-control"
              name="txtCity"
              value={this.state.txtCity}
              onChange={this.handleChangeValue}
            >
              <option value="Ho Chi Minh">Ho Chi Minh</option>
              <option value="Ha Noi">Ha Noi</option>
              <option value="An Giang">An Giang</option>
            </select>
          </div>

          <div className="col-md-12 form-group p_star">
            <select
              id="txtDistrict"
              className="country_select form-control"
              name="txtDistrict"
              value={this.state.txtDistrict}
              onChange={this.handleChangeValue}
            >
              <option value="Cho Moi 1">Cho Moi 1</option>
              <option value="Cho Moi 2">Cho Moi 2</option>
              <option value="Cho Moi 3">Cho Moi 3</option>
            </select>
          </div>

          <div className="col-md-12 form-group p_star">
            <label>Address: </label>
            <textarea
              className="form-control"
              name="txtAddress"
              value={this.state.txtAddress}
              onChange={this.handleChangeValue}
            />
          </div>

          <div className="creat_account col-md-6 d-flex align-items-center">
            <input
              type="checkbox"
              id="f-option2"
              name="txtChecked"
              checked={this.state.txtChecked}
              onChange={this.handleChangeValue}
            />
            <label className="m-0 ml-2" htmlFor="f-option2">
              Create an account?
            </label>
          </div>

          <div className="col-md-6 form-group p_star">
            <label>Password:</label>
            <input
              className="form-control"
              name="txtPassword"
              type="password"
              value={this.state.txtPassword}
              onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12">
            <button
              style={{ padding: 0 }}
              onClick={this.handleSubmit}
              className="btn btn-info"
              type="submit"
            >
              <Link style={{ padding: "7px 40px", color: "white" }} to="/order">
                Continue payment
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStateToReducer: vl => {
      dispatch(actions.setStateToReducer(vl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormOrder);
