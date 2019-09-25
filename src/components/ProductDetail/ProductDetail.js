import React from "react";
import { NavLink } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div>
      <section className="blog-banner-area" id="blog">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Shop Single</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="#">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop Single
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="product_image_area">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-6">
              <div className="owl-carousel owl-theme s_Product_carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-900px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "2250px"
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: "450px" }}>
                      <div className="single-prd-item">
                        <img
                          className="img-fluid"
                          src="img/category/s-p1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "450px" }}>
                      <div className="single-prd-item">
                        <img
                          className="img-fluid"
                          src="img/category/s-p1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: "450px" }}>
                      <div className="single-prd-item">
                        <img
                          className="img-fluid"
                          src="img/category/s-p1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "450px" }}>
                      <div className="single-prd-item">
                        <img
                          className="img-fluid"
                          src="img/category/s-p1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "450px" }}>
                      <div className="single-prd-item">
                        <img
                          className="img-fluid"
                          src="img/category/s-p1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>Faded SkyBlu Denim Jeans</h3>
                <h2>$149.99</h2>
                <ul className="list">
                  <li>
                    <NavLink className="active" to="#">
                      <span>Category</span> : Household
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span>Availibility</span> : In Stock
                    </NavLink>
                  </li>
                </ul>
                <p>
                  Mill Oil is an innovative oil filled radiator with the most
                  modern technology. If you are looking for something that can
                  make your interior look awesome, and at the same time give you
                  the pleasant warm feeling during the winter.
                </p>
                <div className="product_count mr-4">
                  <span className="mr-3">Quantity:</span>
                  <input
                    type="text"
                    name="qty"
                    id="sst"
                    maxLength={12}
                    defaultValue={10}
                    title="Quantity:"
                    className="input-text qty "
                  />
                  <button className="increase" type="button">
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <button
                    style={{ bottom: "-3px" }}
                    className="reduced"
                    type="button"
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <NavLink className="button primary-btn" to="#">
                  Add to Cart
                </NavLink>
                <div className="card_area d-flex align-items-center">
                  <NavLink className="icon_btn" to="#">
                    <i className="lnr lnr lnr-diamond" />
                  </NavLink>
                  <NavLink className="icon_btn" to="#">
                    <i className="lnr lnr lnr-heart" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product_description_area"></section>
    </div>
  );
};
export default ProductDetail;
