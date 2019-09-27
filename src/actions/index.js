import * as types from "./../constants";

const addToCart = (product, id) => {
  return {
    type: types.ADD_CART,
    product,
    id
  };
};

const updateCart = () => {
  return {
    type: types.UPDATE_CART
  };
};

const removeFromCart = id => {
  return {
    type: types.REMOVE_CART,
    id
  };
};

const defaultState = () => {
  return {
    type: types.DEFAULT
  };
};

const increaseQuantity = id => {
  return {
    type: types.INCREASE,
    id
  };
};
const reducedQuantity = id => {
  return {
    type: types.REDUCED,
    id
  };
};
const findIndexProduct = pro => {
  return {
    type: types.FINDIDX,
    pro
  };
};

const changeValue = ob => {
  return {
    type: types.CHANGEVL,
    ob
  };
};
const submitOrder = () => {
  return {
    type: types.SUBMIT
  };
};

const getSubTotal = carts => {
  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total += carts[i].quantity * carts[i].price;
  }
  return total;
};
const discountOrder = carts => {
  if (getSubTotal(carts) < 100) {
    return "11.000";
  }
  return "Freeship";
};
const getTotal = carts => {
  let shiped = 0;
  let total = 0;
  if (discountOrder(carts) === "Freeship") {
    shiped = 0;
  } else {
    shiped = parseInt("11.000");
  }
  total = getSubTotal(carts) + shiped;
  return total;
};
export {
  addToCart,
  updateCart,
  removeFromCart,
  defaultState,
  increaseQuantity,
  reducedQuantity,
  findIndexProduct,
  getSubTotal,
  discountOrder,
  getTotal,
  changeValue,
  submitOrder
};
