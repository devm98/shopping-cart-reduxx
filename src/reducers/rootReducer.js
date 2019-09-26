import { combineReducers } from "redux";
import products from "./productsReducer";
import carts from "./cartsReducer";
const myReducer = combineReducers({
  products,
  carts
});

export default myReducer;
