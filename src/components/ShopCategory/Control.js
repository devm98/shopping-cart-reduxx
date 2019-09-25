import React from "react";

export default function Control() {
  return (
    <div className="filter-bar d-flex flex-wrap align-items-center">
      <div className="sorting">
        <select style={{ display: "none" }}>
          <option value={1}>Default sorting</option>
          <option value={1}>Default sorting</option>
          <option value={1}>Default sorting</option>
        </select>
        <div className="nice-select" tabIndex={0}>
          <span className="current">Default sorting</span>
          <ul className="list">
            <li data-value={1} className="option selected">
              Default sorting
            </li>
            <li data-value={1} className="option">
              Default sorting
            </li>
            <li data-value={1} className="option">
              Default sorting
            </li>
          </ul>
        </div>
      </div>
      <div className="sorting mr-auto">
        <select style={{ display: "none" }}>
          <option value={1}>Show 12</option>
          <option value={1}>Show 12</option>
          <option value={1}>Show 12</option>
        </select>
        <div className="nice-select" tabIndex={0}>
          <span className="current">Show 12</span>
          <ul className="list">
            <li data-value={1} className="option selected">
              Show 12
            </li>
            <li data-value={1} className="option">
              Show 12
            </li>
            <li data-value={1} className="option">
              Show 12
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="input-group filter-bar-search">
          <input type="text" placeholder="Search" />
          <div className="input-group-append">
            <button type="button">
              <i className="ti-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
