import React from "react";
import Cart from "../Cart/Cart";
import Category from "../ShopCategory/Category";
import ProductDetail from "../ProductDetail/ProductDetail";
import Navbar from "./../Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./../Footer";

const ShopApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={Category} />
        <Route path="/productDetail/" component={ProductDetail} />
        <Route path="/cart/" component={Cart} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default ShopApp;
