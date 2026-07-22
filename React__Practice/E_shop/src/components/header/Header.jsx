import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "./header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-dark custom-topbar py-2 px-xl-5 d-none d-lg-block">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="d-inline-flex align-items-center">
              <Link className="text-white-50 small text-decoration-none mr-3" to="">FAQs</Link>
              <span className="text-white-50 px-2">|</span>
              <Link className="text-white-50 small text-decoration-none mx-3" to="">Help</Link>
              <span className="text-white-50 px-2">|</span>
              <Link className="text-white-50 small text-decoration-none ml-3" to="">Support</Link>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-inline-flex align-items-center text-white-50 small">
              <span className="mr-3"><i className="fa fa-envelope mr-2"></i>info@example.com</span>
              <span className="mr-3">|</span>
              <Link className="text-white-50 px-2" to=""><i className="fab fa-facebook-f"></i></Link>
              <Link className="text-white-50 px-2" to=""><i className="fab fa-twitter"></i></Link>
              <Link className="text-white-50 px-2" to=""><i className="fab fa-linkedin-in"></i></Link>
              <Link className="text-white-50 px-2" to=""><i className="fab fa-instagram"></i></Link>
              <Link className="text-white-50 pl-2" to=""><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-fluid bg-white shadow-sm border-bottom mb-5 sticky-top">
        <div className="row px-xl-5 align-items-center justify-content-between py-3">
          
          {/* Logo */}
          <div className="col-6 col-lg-2 d-flex align-items-center">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0 display-6 fw-bold text-black">
                <span className="text-success fw-bold px-3">E</span>shop
              </h1>
            </Link>
          </div>

          {/* Mobile Toggler Icon */}
          <div className="col-6 text-right d-lg-none">
            <button
              type="button"
              className="custom-menu-toggler btn border bg-light"
              onClick={toggleMenu}
            >
              <i className={`fas ${isNavOpen ? "fa-times" : "fa-bars"} text-dark`}></i>
            </button>
          </div>

          {/* Navigation & Actions Container (With Slide Animation) */}
          <div className={`col-lg-10 custom-nav-container ${isNavOpen ? "open" : ""}`}>
            <div className="d-lg-flex align-items-center justify-content-between w-100">
              
              {/* Nav Links */}
              <div className="navbar-nav py-0 flex-column flex-lg-row">
                <Link to="/" className="nav-item nav-link px-2">Home</Link>
                <Link to="/shop" className="nav-item nav-link px-2">Shop</Link>
                <Link to="/detail" className="nav-item nav-link px-2 active">Shop Detail</Link>
                
                <div className="nav-item dropdown px-2">
                  <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                    Pages <i className="fa fa-angle-down ml-1"></i>
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0 border-0 shadow-sm">
                    <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                  </div>
                </div>

                <Link to="/contact" className="nav-item nav-link px-2">Contact</Link>
              </div>

              {/* Search Bar */}
              <div className="custom-search-box my-3 my-lg-0 mx-lg-3">
                <input type="text" placeholder="Search for products" className="form-control" />
                <button type="button" className="btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>

              {/* Icons & Buttons */}
              <div className="d-flex align-items-center flex-wrap gap-2 mt-3 mt-lg-0">
                {/* Wishlist */}
                <Link
                  to=""
                  className="btn rounded-circle border position-relative d-flex align-items-center justify-content-center mr-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fas fa-heart text-black"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success text-white" style={{ fontSize: "9px" }}>
                    0
                  </span>
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="btn rounded-circle border position-relative d-flex align-items-center justify-content-center mr-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fas fa-shopping-cart text-black"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success text-white" style={{ fontSize: "9px" }}>
                    0
                  </span>
                </Link>

                {/* Login & Register */}
                <div className="d-flex align-items-center">
                  <Link to="/login" className="nav-btn-login px-3 py-1 mr-2 text-decoration-none">
                    Login
                  </Link>
                  <Link to="/register" className="nav-btn-register px-3 py-1 text-decoration-none bg-success text-white rounded">
                    Register
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;