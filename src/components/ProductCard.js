import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h4>{product.name}</h4>
    <p>{product.brand}</p>
    <div className="product-pricing">
      <span className="price">₹{product.price}</span>
      <span className="old-price">₹{product.oldPrice}</span>
      <span className="discount">{product.discount}</span>
    </div>
    <span className="offer">{product.offer}</span>
  </div>
);

export default ProductCard;
