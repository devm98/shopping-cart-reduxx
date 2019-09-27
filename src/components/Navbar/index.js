import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions";

const menus = [
  {
    name: "Shop Category",
    to: "/",
    exact: true
  },
  {
    name: "Shopping Cart",
    to: "/cart",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact, action }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active abc" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link onClick={action} to={to} className="nav-link " role="button">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const Navbar = props => {
  return (
    <>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <NavLink className="navbar-brand logo_h" to="/">
                <img src="img/logo.png" alt="" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  {menus.map((item, index) => {
                    return (
                      <MenuLink
                        key={index}
                        label={item.name}
                        to={item.to}
                        activeOnlyWhenExact={item.exact}
                        action={props.defaultState}
                      />
                    );
                  })}
                </ul>
                <ul className="nav-shop">
                  <li onClick={props.defaultState} className="nav-item">
                    <button>
                      <NavLink to="/cart">
                        <i className="ti-shopping-cart" />
                      </NavLink>
                      <span className="nav-shop__circle">
                        {props.carts.length}
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <NavLink className="button button-header" to="/">
                      Buy Now
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = state => {
  return {
    carts: state.carts.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    defaultState: () => {
      dispatch(actions.defaultState());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
