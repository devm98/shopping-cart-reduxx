import { combineReducers } from "redux";
import products from "./productsReducer";
import carts from "./cartsReducer";
import orders from "./ordersReducer";
const myReducer = combineReducers({
  products,
  carts,
  orders
});

export default myReducer;
