import React from "react";
import { Link } from "react-router-dom";

import "./productCard.css"
function ProductCard({name,price,category,reality,url }) {
  return (
    <div className="card product-card   mb-4 shadow-sm rounded-xl overflow-hidden" >
      <div className="product-img-wrapper position-relative bg-light p-3">
        <span
          className="badge badge-success position-absolute py-2 px-3 m-2 font-weight-semi-bold"
          style={{
            top: "0",
            left: "0",
            borderRadius: "8px",
            zIndex: "2",
            backgroundColor: "#2e7d32",
          }}
        >
          {reality}
        </span>
        <Link to="detail.html" className="d-block overflow-hidden rounded-lg">
          <img
            className="img-fluid  product-card-img"
            src={url}
            alt="Fresh Red Apples"
            style={{width: "250px"}}
          />
        </Link>
      </div>
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="text-muted text-sm font-weight-medium">{category}</span>
          <div className="text-warning text-sm">
            <i className="fas fa-star"></i> 4.8
          </div>
        </div>
        <Link to="detail.html" className="text-decoration-none">
          <h5
            className="font-weight-bold text-dark text-truncate mb-2"
            style={{ fontSize: "1rem" }}
          >
            {name}
          </h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span className="font-weight-bold text-lg text-success fw-bold">₹{price}</span>
            <span className="text-muted ml-2 text-sm">
              <del>₹5.99</del>
            </span>
          </div>
          <Link
            to="cart.html"
            className="btn btn-success rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{
              width: "38px",
              height: "38px",
              boxShadow: "0 4px 10px rgba(46, 125, 50, 0.3)",
            }}
          >
            <i className="fas fa-shopping-basket text-white text-sm"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
