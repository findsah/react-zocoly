import React, { Component } from "react";
import "../CSS/productdetail.css";
import whitecart from "../assets/template2assets/icons/white-cart.png";
import product from "../assets/template2assets/images/product.png";
import product1 from "../assets/template2assets/images/product1.png";
import product2 from "../assets/template2assets/images/product2.png";
import product3 from "../assets/template2assets/images/product3.png";
import product4 from "../assets/template2assets/images/product4.png";
import tag from "../assets/template2assets/icons/tag.png";
import Heart from "react-animated-heart";
import ReactStars from "react-rating-stars-component";
import ProductAccordion from "../subComponents/utils/productAccordion";
import HomeCard from "./../subComponents/utils/homeCard";

class ProductDetail extends Component {
  state = {
    isClick: false,
  };

  handleClick = (e) => {
    this.setState({ isClick: !this.state.isClick });
  };

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <img className="product-image" src={product} alt="productImage" />
              <div className="row mb-2">
                <img
                  className="products-image"
                  src={product1}
                  alt="productImage"
                />

                <img
                  className="products-image"
                  src={product2}
                  alt="productImage"
                />
              </div>
              <div className="row mb-5">
                <img
                  className="products-image"
                  src={product3}
                  alt="productImage"
                />

                <img
                  className="products-image"
                  src={product4}
                  alt="productImage"
                />
              </div>
            </div>
            {/* left line code */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="first-para">Men {">"} Running Shoe</div>

              <div className="prod-name mt-4">Nike React Miler</div>
              <div className="prod-id mt-2"> SKU# 583942439 </div>

              <div className="prod-details mt-5">
                <div className="prod-price">$120</div>
                <div className="prod-discount">
                  <img className="discount-tag" src={tag} alt="discount-tag" />
                  15% off
                </div>
              </div>

              <div className="prod-details mt-5">
                <div className="row">
                  <label className="form-label">Size</label>
                  <select
                    className="form-select1"
                    aria-label="Default select example"
                  >
                    <option selected> Small</option>
                    <option value="1">Medium</option>
                    <option value="2">Large</option>
                    <option value="3">XL</option>
                  </select>
                </div>
                <div className="row">
                  <label className="form-label">Color</label>
                  <select
                    className="form-select2"
                    aria-label="Default select example"
                  >
                    <option selected>red</option>
                    <option value="1">white</option>
                    <option value="2">orange</option>
                    <option value="3">blue</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="form-label">Quantity</label>
                <select
                  className="form-select3"
                  aria-label="Default select example"
                >
                  <option selected>1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
              </div>
              <div className="buttons">
                <button className="cart-button">
                  Add to Cart
                  <img className="cart-img" src={whitecart} alt="white-cart" />
                </button>

                <button className="heart-button">
                  <Heart
                    className="ai-out"
                    isClick={this.state.isClick}
                    onClick={(e) => this.handleClick(e)}
                  />
                </button>
              </div>
              <div className="rating-etc">
                <ReactStars
                  classNames=""
                  count={5}
                  onChange={this.ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                />

                <p className="rate-no"> 4.5 </p>
                <p className=""> {"|"} </p>
                <p className="no-of-rat"> 25 ratings </p>
                <p className="write-review"> write a review </p>
              </div>

              <div className="mt-5">
                <ProductAccordion />
              </div>
            </div>
          </div>

          {/* for part 3 cards */}
          <div className="row part-3">
            <p className="text-3"> You may also like </p>
            <div className="row">
              <div className="col-lg-3">
                <HomeCard />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <HomeCard />
              </div>
              <div className="col-lg-3">
                <HomeCard />
              </div>
              <div className="col-lg-3">
                <HomeCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
