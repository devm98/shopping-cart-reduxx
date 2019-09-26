import React from "react";
import { NavLink } from "react-router-dom";

export default function Banner(props) {
  return (
    <section className="blog-banner-area" id="category">
      <div className="container h-100">
        <div className="blog-banner">
          <div className="text-center">
            <h1>{props.title}</h1>
            <nav aria-label="breadcrumb" className="banner-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="#">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
