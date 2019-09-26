import React from "react";
import Control from "./Control";
import Product from "./Product";
import Banner from "../Banner";
import { connect } from "react-redux";
const Category = props => {
  return (
    <>
      <Banner title="Shop Category" />
      <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <Control />
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {props.products.map(item => {
                    return (
                      <Product
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        srcImg={item.src}
                        price={`${item.price}.000`}
                      />
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(Category);
