import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Flipkart</div>
    <input className="navbar-search" type="text" placeholder="Search for products, brands and more" />
    <button className="navbar-login">Login</button>
    <div className="navbar-links">
      <span>Become a Seller</span>
      <span>More</span>
      <span>Cart</span>
    </div>
  </nav>
);

export default Navbar;
