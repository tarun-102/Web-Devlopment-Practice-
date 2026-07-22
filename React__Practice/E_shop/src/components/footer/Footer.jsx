import React from 'react';
import"./footer.css"
const Footer = () => {
  return (
    <div className="container-fluid  text-dark mt-5 pt-5" style={{backgroundColor: "#eef7ed"}}>
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="/" className="text-decoration-none">
            <h1  className="mb-4 display-5  text-black fw-semibold">
              <span className="text-success fw-bold  px-3 mr-1">E</span>shop
            </h1>
          </a>
          <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-success mr-3"></i>123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-success mr-3"></i>info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-success mr-3"></i>+012 345 67890</p>
        </div>
        
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="fw-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-dark mb-2" href="/shop"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a className="text-dark mb-2" href="/detail"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a className="text-dark mb-2" href="/cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a className="text-dark mb-2" href="/checkout"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                <a className="text-dark" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
              </div>
            </div>
            
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-dark mb-2" href="/shop"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a className="text-dark mb-2" href="/detail"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a className="text-dark mb-2" href="/cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a className="text-dark mb-2" href="/checkout"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                <a className="text-dark" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
              </div>
            </div>
            
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required />
                </div>
                <div>
                  <button className="btn btn-success btn-block border-0 py-3 mt-3" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0  text-md-left text-dark">
            &copy; <a className="text-dark fw-semibold text-decoration-none" href="/">Your Site Name</a>. All Rights Reserved.Designed by
            <a className="text-dark text-decoration-none fw-semibold" href="https://htmlcodex.com"> HTML Codex</a><br />Distributed By 
            <a href="https://themewagon.com" target="_blank" className="text-success text-decoration-none"  rel="noreferrer">ThemeWagon</a>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-end text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;