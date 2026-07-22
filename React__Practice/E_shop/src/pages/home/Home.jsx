import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductDetails from "../../components/productDetails/ProductDetails";
import ProductCard from "../../components/productCard/ProductCard";
import "../../index.css";
import "./home.css";

function Home() {
  const [showButton, setShowButton] = useState(false);

  // Scroll position detect karne ke liye effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top par smooth scroll karne ka function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />

      <div
        className="container-fluid mb-5"
        style={{ backgroundColor: "#f3f7f4" }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="/">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>

      {/* shop detail start */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          {/* Product Carousel */}
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner border rounded-xl overflow-hidden shadow-sm"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#eef7ed" }}
              >
                <div className="carousel-item active p-4">
                  <img
                    className="w-100 h-100 object-fit-contain"
                    src="/img/product_apples.png"
                    alt="Fresh Red Apples"
                  />
                </div>
                <div className="carousel-item p-4">
                  <img
                    className="w-100 h-100 object-fit-contain"
                    src="/img/product_strawberries.png"
                    alt="Fresh Strawberries"
                  />
                </div>
                <div className="carousel-item p-4">
                  <img
                    className="w-100 h-100 object-fit-contain"
                    src="/img/cat_fruits.png"
                    alt="Organic Fruits Mix"
                  />
                </div>
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#product-carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{ filter: "invert(1)" }}
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#product-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{ filter: "invert(1)" }}
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-7 pb-5">
            <span
              className="badge badge-success py-2 px-3 mb-3 font-weight-bold"
              style={{ backgroundColor: "#2e7d32", borderRadius: "8px" }}
            >
              100% Organic
            </span>
            <h3 className="fw-bolder text-dark mb-2">
              Fresh Organic Red Apples
            </h3>

            {/* Rating */}
            <div className="d-flex mb-3">
              <div className="text-warning mr-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <small className="pt-1 text-muted">(48 Customer Reviews)</small>
            </div>

            {/* Price */}
            <h3 className="fw-bold text-success mb-4">
              ₹4.99{" "}
              <span
                className="text-muted text-sm font-weight-normal"
                style={{ fontSize: "1rem" }}
              >
                / kg
              </span>
            </h3>

            {/* Description */}
            <p className="mb-4 text-muted">
              Freshly handpicked organic Red Delicious apples sourced directly
              from local, pesticide-free orchards. Incredibly sweet, crisp, and
              juicy. Naturally rich in dietary fiber, vitamins, and
              antioxidants.
            </p>

            {/* Weight Selection */}
            <div className="d-flex mb-3 align-items-center">
              <p
                className="text-dark fw-bold mb-0 mr-3"
                style={{ minWidth: "75px" }}
              >
                Weight:
              </p>
              <form className="d-flex align-items-center flex-wrap gap-4">
                <div className="custom-control custom-radio custom-control-inline mr-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                    defaultChecked
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="size-1"
                    style={{ cursor: "pointer" }}
                  >
                    500g
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline mr-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    name="size"
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="size-2"
                    style={{ cursor: "pointer" }}
                  >
                    1kg
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    name="size"
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="size-3"
                    style={{ cursor: "pointer" }}
                  >
                    2kg
                  </label>
                </div>
              </form>
            </div>

            {/* Variety Selection */}
            <div className="d-flex mb-4 align-items-center">
              <p
                className="text-dark fw-bold mb-0 mr-3"
                style={{ minWidth: "75px" }}
              >
                Variety:
              </p>
              <form className="d-flex align-items-center flex-wrap gap-3">
                <div className="custom-control custom-radio custom-control-inline mr-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-1"
                    name="color"
                    defaultChecked
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="color-1"
                    style={{ cursor: "pointer" }}
                  >
                    Red Delicious
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline mr-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-2"
                    name="color"
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="color-2"
                    style={{ cursor: "pointer" }}
                  >
                    Royal Gala
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-3"
                    name="color"
                  />
                  <label
                    className="custom-control-label fw-medium ps-2 text-secondary"
                    htmlFor="color-3"
                    style={{ cursor: "pointer" }}
                  >
                    Granny Smith
                  </label>
                </div>
              </form>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="d-flex align-items-center mb-4 pt-2">
              <div
                className="input-group quantity mr-3"
                style={{ width: "130px" }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-success btn-minus">
                    <i className="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light text-center border-0"
                  defaultValue="1"
                  readOnly
                />
                <div className="input-group-btn">
                  <button className="btn btn-success btn-plus">
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <button
                className="btn btn-success px-4 py-2 ms-2 fw-semibold"
                style={{ boxShadow: "0 4px 15px rgba(46, 125, 50, 0.25)" }}
              >
                <i className="fas fa-shopping-basket mr-2"></i> Add To Cart
              </button>
            </div>

            <div className="d-flex pt-2 align-items-center">
              <p className="text-dark fw-bold mb-0 mr-3">Share on:</p>
              <div className="d-inline-flex">
                <a className="text-dark px-2" href="#facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-dark px-2" href="#twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-dark px-2" href="#linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-dark px-2" href="#pinterest">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navtabs */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ProductDetails />
        </div>
      </div>

      {/* card-section */}
      <div className="container-fluid py-5">
        <div className="text-center mb-5">
          <h2 className="section-title px-5">
            <span className="px-2">You May Also Like</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <ProductCard
              name={"organic Broccoli"}
              category="vegetables"
              price={2.49}
              reality={"Organic"}
              url={"img/product_broccoli.png"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <ProductCard
              name={"Fresh Whole Milk"}
              category="Dairy"
              price={3.49}
              reality={"Fresh"}
              url={"img/product_milk.png"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <ProductCard
              name={"Whole Wheat Bread"}
              category="Bakery"
              price={2.99}
              reality={"New"}
              url={"img/product_bread.png"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <ProductCard
              name={"organic Orange Juice"}
              category="Beverages"
              price={4.49}
              reality={"Organic"}
              url={"img/product_juice.png"}
            />
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          title="Go to top"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            zIndex: 9999,
            fontSize: "18px",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            outline: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;