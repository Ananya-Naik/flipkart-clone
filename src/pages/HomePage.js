import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import "./HomePage.css";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <ProductList />
    </div>
  </div>
);

export default HomePage;
