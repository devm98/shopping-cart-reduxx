import * as types from "../constants";

const initState = {
  name: { key: "name", value: "" },
  phoneNum: { key: "phoneNum", value: "" }
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGEVL:
      return {
        ...state
      };
    case types.SUBMIT:
      return state;
    default:
      return state;
  }
};

export default myReducer;
