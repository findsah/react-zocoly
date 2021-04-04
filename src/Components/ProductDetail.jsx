import React, { Component } from "react";
import "../CSS/productdetail.css";
import whitecart from "../assets/template2assets/icons/white-cart.png";
import product from "../assets/template2assets/images/product.png";
import tag from "../assets/template2assets/icons/tag.png";
//import HeartO from "../assets/template2assets/icons/heart.png";
import ReactStars from "react-rating-stars-component";
import ProductAccordion from "../subComponents/utils/productAccordion";
import HomeCard from "./../subComponents/utils/homeCard";
import { Container, Modal, Row, Col } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import Heart from "react-heart";
import { FaGreaterThan } from "react-icons/fa";

class ProductDetail extends Component {
  state = {
    modalShow: false,
    active: false,
    productItem: JSON.parse(localStorage.getItem("item")),
  };

  handleClick = (e) => {
    this.setState({ active: !this.state.active });
  };

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  componentDidMount() {
    // console.log(this.state.productItem);
    const pathname = window.location.pathname;
    localStorage.setItem("pathname", pathname);
    // console.log(pathname);
  }

  render() {
    const item = this.state.productItem;
    const item_size = item.product.variant[0].variant_options;
    const item_color = item.product.variant[1].variant_options;
    //console.log(item_color);

    return (
      <>
        <div className="container show-out">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <img className="product-image" src={product} alt="productImage" />
              <div className="row mb-2">
                <img
                  className="products-image"
                  src={`https://zocoly-backend.herokuapp.com${item.item_files[0].image}`}
                  alt="productImage"
                />

                <img
                  className="products-image"
                  src={`https://zocoly-backend.herokuapp.com${item.item_files[1].image}`}
                  alt="productImage"
                />
              </div>
              <div className="row mb-5">
                <img
                  className="products-image"
                  src={`https://zocoly-backend.herokuapp.com${item.item_files[2].image}`}
                  alt="productImage"
                />

                <img
                  className="products-image"
                  src={`https://zocoly-backend.herokuapp.com${item.item_files[3].image}`}
                  alt="productImage"
                />
              </div>
            </div>
            {/* left line code */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="first-para">
                {item.collection_name} <FaGreaterThan className="greator" />
                {item.product_name}
              </div>

              <div className="prod-name mt-4">{item.Title}</div>
              <div className="prod-id mt-2"> SKU# {item.SKU} </div>

              <div className="prod-details mt-5">
                <div className="prod-price">${item.Price}</div>
                <div className="prod-discount">
                  <img className="discount-tag" src={tag} alt="discount-tag" />
                  {item.discount}% off
                </div>
              </div>

              <Row className="mt-5">
                <Col>
                  <label className="form-label">Size</label>
                  <select
                    className="form-select1"
                    aria-label="Default select example"
                  >
                    {item_size.map((size, index) => (
                      <option className="options" key={index} value={size.name}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col>
                  <label className="form-label">Color</label>
                  <select
                    className="form-select2"
                    aria-label="Default select example"
                  >
                    {item_color.map((color, index) => (
                      <option key={index} value={color.name}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>

              <div className="mt-5">
                <label className="form-label">Quantity</label>
                <select
                  className="form-select3"
                  aria-label="Default select example"
                >
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="buttons">
                <button className="cart-button">
                  Add to Cart
                  <img className="cart-img" src={whitecart} alt="white-cart" />
                </button>

                <button className="heart-button">
                  <Heart
                    className="heart-image"
                    isActive={this.state.active}
                    onClick={() =>
                      this.setState({ active: !this.state.active })
                    }
                  />
                  {/* <img className="heart-image" src={HeartO} alt="heart" /> */}
                </button>
              </div>
              <div className="rating-etc">
                <ReactStars
                  classNames=""
                  value={4}
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
                <ProductAccordion data={this.state.productItem} />
              </div>
            </div>
          </div>

          {/* for part 3 cards */}
          <div className="row part-3">
            <p className="text-3"> You may also like </p>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <HomeCard />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <HomeCard />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <HomeCard />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <HomeCard />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="show-in">
          <div className="container for-card">
            <div className="card2-mob">
              <div>
                {/* <img className="heart-image" src={HeartO} alt="heart" /> */}
                <Heart
                  className="heart-image"
                  isActive={this.state.active}
                  onClick={() => this.setState({ active: !this.state.active })}
                />
              </div>
              <div>
                <img
                  className="card2-mob-img"
                  src={`https://zocoly-backend.herokuapp.com${item.item_files[2].image}`}
                  alt="product-pic"
                />
              </div>
              <div>
                <p className="card2-mob-text"> Nike Renew Run </p>
              </div>

              {/* part two */}

              <div className="homecard-content">
                <div className="content1">
                  <h2 className="mob-price">$130</h2>
                  <p
                    className="mob-details text-muted"
                    onClick={() =>
                      this.setState({ modalShow: !this.state.modalShow })
                    }
                  >
                    See Details
                  </p>
                  <ProductModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    data={item}
                    item_size={item_size}
                    item_color={item_color}
                    isActive={this.state.active}
                    handleClick={this.handleClick}
                  />
                </div>
                <div className="content2">
                  <button className="homecard-mob-button">
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
      </>
    );
  }
}

function ProductModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container className="start">
        <Modal.Header className="mybut">
          <div className="mod-title mt-2">{props.data.Title}</div>
          <GrFormClose className="closee-but" onClick={props.onHide} />
        </Modal.Header>
        <Row>
          <div className="prod-id"> SKU# {props.data.SKU} </div>
        </Row>
        <Row>
          <div className="prod-details mt-4">
            <div className="prod-price">${props.data.Price}</div>
            <div className="prod-discount">
              <img className="discount-tag" src={tag} alt="discount-tag" />
              {props.data.discount}% off
            </div>
          </div>
        </Row>
        <Row className="mt-3">
          <Col>
            <label className="form-label">Size</label>
            <select
              className="form-select1"
              aria-label="Default select example"
            >
              {props.item_size.map((size, index) => (
                <option key={index} value={size.name}>
                  {size.name}
                </option>
              ))}
            </select>
          </Col>
          <Col>
            <label className="form-label label-mar">Color</label>
            <select
              className="form-select2"
              aria-label="Default select example"
            >
              {props.item_color.map((color, index) => (
                <option key={index} value={color.name}>
                  {color.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>

        <div className="mt-2">
          <label className="form-label">Quantity</label>
          <select className="form-select3" aria-label="Default select example">
            <option selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="mod-buttons mb-2">
          <button className="cart-button">
            Add to Cart
            <img className="cart-img" src={whitecart} alt="white-cart" />
          </button>

          <button className="heart-button">
            {/* <img className="heart-imag" src={HeartO} alt="heart" /> */}
            <Heart
              className="heart-imag"
              isActive={props.isActive}
              onClick={props.handleClick}
            />
          </button>
        </div>
      </Container>
    </Modal>
  );
}

export default ProductDetail;
