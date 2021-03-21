import React, { Component } from "react";
import "../CSS/home.css";
import product from "../assets/template2assets/images/product.png";
import whitecart from "../assets/template2assets/icons/white-cart.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row showinscroll" id="showinscroll">
          <div className="check">
            <div className="col-sm-4 col-md-4 col-lg-4 col-card">
              <div className="card">
                <img className="card-image" src={product} alt="productImage" />
                <div className="product-content">
                  <div className="content1">
                    <h3 className="product-h3">Nike Item</h3>
                    <h2 className="product-h2">$130</h2>
                  </div>
                  <div className="content2">
                    <button className="content2-button">
                      <img
                        className="content2-img"
                        src={whitecart}
                        alt="white-cart"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}

            <div className="col-sm-4 col-md-4 col-lg-4 col-card">
              <div className="card">
                <img className="card-image" src={product} alt="productImage" />
                <div className="product-content">
                  <div className="content1">
                    <h3 className="product-h3">Nike Item</h3>
                    <h2 className="product-h2">$130</h2>
                  </div>
                  <div className="content2">
                    <button className="content2-button">
                      <img
                        className="content2-img"
                        src={whitecart}
                        alt="white-cart"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}

            <div className="col-sm-4 col-md-4 col-lg-4 col-card">
              <div className="card">
                <img className="card-image" src={product} alt="productImage" />
                <div className="product-content">
                  <div className="content1">
                    <h3 className="product-h3">Nike Item</h3>
                    <h2 className="product-h2">$130</h2>
                  </div>
                  <div className="content2">
                    <button className="content2-button">
                      <img
                        className="content2-img"
                        src={whitecart}
                        alt="white-cart"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
