import React from "react";
import "./Sidebar.css";
import { filters } from "../mockData";

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Filters</h3>
    <div className="filter-section">
      <h4>Brand</h4>
      {filters.brands.map((brand) => (
        <div key={brand}>
          <input type="checkbox" id={brand} />
          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
    </div>
    <div className="filter-section">
      <h4>Categories</h4>
      {filters.categories.map((cat) => (
        <div key={cat}>{cat}</div>
      ))}
    </div>
  </aside>
);

export default Sidebar;
