import * as types from "../constants";

// import * as types from "../../constants";

const initState = {
  carts: [
    // {
    //   id: 4,
    //   name: "F-22 Raptor T-Shirt In White",
    //   src: "https://k300.vn/upload/images/2019/T7/5-AK/T1024-5.jpg",
    //   price: 20,
    //   quantity: 1
    // }
  ],
  show: false
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_CART:
      const idx8 = state.carts.findIndex(item => {
        return item.id === action.id;
      });
      console.log(idx8);
      if (idx8 !== -1) {
        const newCart = [...state.carts];
        newCart[idx8].quantity++;
        return { ...state, carts: newCart };
      } else {
        return {
          ...state,
          carts: [...state.carts, action.product]
        };
      }
    case types.UPDATE_CART:
      return { ...state, show: !state.show };
    case types.REMOVE_CART:
      const newCart2 = state.carts.filter(item => {
        return item.id !== action.id;
      });
      return {
        ...state,
        carts: newCart2
      };
    case types.DEFAULT:
      return { ...state, show: false };
    case types.INCREASE:
      const newCart3 = [...state.carts];
      const idx = state.carts.findIndex(item => {
        return item.id === action.id;
      });
      newCart3[idx].quantity = newCart3[idx].quantity + 1;
      return {
        ...state,
        carts: newCart3
      };
    case types.REDUCED:
      const newCart4 = [...state.carts];
      const idx2 = state.carts.findIndex(item => {
        return item.id === action.id;
      });
      newCart4[idx2].quantity = newCart4[idx2].quantity - 1;
      if (newCart4[idx2].quantity < 1) {
        newCart4[idx2].quantity = 1;
      }
      return {
        ...state,
        carts: newCart4
      };
    default:
      return state;
  }
};

export default myReducer;
