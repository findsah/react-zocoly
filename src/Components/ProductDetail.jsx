import React, { Component } from "react";
import "../CSS/productdetail.css";

import product from "../assets/template2assets/images/product.png";
import product1 from "../assets/template2assets/images/product1.png";
import product2 from "../assets/template2assets/images/product2.png";
import product3 from "../assets/template2assets/images/product3.png";
import product4 from "../assets/template2assets/images/product4.png";
import tag from "../assets/template2assets/icons/tag.png";
//import { Dropdown, Form } from "react-bootstrap";

class ProductDetail extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
            <div className="col-lg-4 ">
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
                <div>
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

              <div>
                <label className="form-label">Quantity</label>
                <select
                  className="form-select2"
                  aria-label="Default select example"
                >
                  <option selected>1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
