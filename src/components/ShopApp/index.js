import React from "react";
import Navbar from "./../Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./../Footer";
import routes from "./../../Routes";

const ShopApp = () => {
  const showMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        );
      });
    }
    return result;
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>{showMenus(routes)}</Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default ShopApp;
