import * as types from "../constants";

const initState = {
  txtName: "",
  txtPhone: "",
  txtCity: "",
  txtDistrict: "",
  txtAddress: "",
  txtChecked: false,
  txtPassword: ""
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGEVL:
      return {
        txtName: action.vl.txtName,
        txtPhone: action.vl.txtPhone,
        txtCity: action.vl.txtCity,
        txtDistrict: action.vl.txtDistrict,
        txtAddress: action.vl.txtAddress,
        txtChecked: action.vl.txtChecked,
        txtPassword: action.vl.txtPassword
      };
    default:
      return state;
  }
};

export default myReducer;
