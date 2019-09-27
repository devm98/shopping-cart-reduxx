import React from "react";
import Category from "./components/ShopCategory/Category";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from "./components/ProductCheckout";
import ConfirmationmOrder from "./components/ConfirmationOder";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Category />
  },
  {
    path: "/productDetail/:id",
    exact: false,
    main: ({ match }) => <ProductDetail match={match} />
  },
  {
    path: "/cart",
    exact: false,
    main: () => <Cart />
  },
  {
    path: "/checkout",
    exact: false,
    main: () => <Checkout />
  },
  {
    path: "/order",
    exact: false,
    main: () => <ConfirmationmOrder />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
