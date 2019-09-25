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
export {
  addToCart,
  updateCart,
  removeFromCart,
  defaultState,
  increaseQuantity,
  reducedQuantity
};
