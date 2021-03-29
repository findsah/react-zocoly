import React, { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../CSS/home.css";
import Accordion from "./utils/homeAccordion";
//import HomeCard from "./utils/homeCard";
import { Pagination, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Heart from "react-animated-heart";
//import product from "../assets/template2assets/images/product.png";
import whitecart from "../assets/template2assets/icons/white-cart.png";
import {
  getProduct,
  getitems,
  sortItems,
  CategoryItems,
  sizeItems,
  onSaleItems,
  colorItems,
} from "./../services/callingServices";
import { Link } from "react-router-dom";

class HomeContent extends Component {
  state = {
    sortType: "Sort By",
    modalShow: false,
    isClick: false,
    items: [],
  };

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  handleClick = (e) => {
    this.setState({ isClick: !this.state.isClick });
  };

  componentDidMount = async () => {
    const product = await getProduct();
    const productName = product[0].name;

    const data = await getitems(productName);
    // console.log(data);
    this.setState({ items: data });
  };

  handleSelect = async (e) => {
    await this.setState({
      sortType: e,
    });
    const data = await sortItems(this.state.sortType);
    this.setState({ items: data });
  };

  handleCategoriesClick = async (catValue) => {
    const data = await CategoryItems(catValue);
    this.setState({ items: data });
  };

  handleSizeClick = async (sizeValue) => {
    const data = await sizeItems(sizeValue);
    console.log(data);
    this.setState({ items: data });
  };

  handleDiscountClick = async () => {
    const data = await onSaleItems();
    console.log(data);
    this.setState({ items: data });
  };

  handleColorClick = async (colorValue) => {
    const data = await colorItems(colorValue);
    console.log(data);
    this.setState({ items: data });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <div className="container mycont">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className=" prod-head">439 Products</p>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {this.state.sortType}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey="Title"
                    onSelect={(eventKey) => this.handleSelect(eventKey)}
                  >
                    Title
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="Price"
                    onSelect={(eventKey) => this.handleSelect(eventKey)}
                  >
                    Price
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div>
                <button
                  className="filter-but"
                  onClick={() =>
                    this.setState({ modalShow: !this.state.modalShow })
                  }
                >
                  Filter
                </button>
                <AccordModal
                  show={this.state.modalShow}
                  onHide={() => this.setState({ modalShow: false })}
                  handleCategoriesClick={this.handleCategoriesClick}
                  handleSizeClick={this.handleSizeClick}
                  handleDiscountClick={this.handleDiscountClick}
                  handleColorClick={this.handleColorClick}
                />
              </div>
            </div>
          </div>
        </div>

        {/*  accordion and cards */}
        <div className="container mycont">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 accordiana">
              <Accordion
                handleCategoriesClick={this.handleCategoriesClick}
                handleSizeClick={this.handleSizeClick}
                handleDiscountClick={this.handleDiscountClick}
                handleColorClick={this.handleColorClick}
              />
            </div>
            <div className="col-lg-9 ">
              <div className="row">
                {items.map((item, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 res" key={index}>
                    <Link
                      className="black-text hover"
                      to={"/productdetail/" + item.id}
                      onClick={() =>
                        localStorage.setItem("item", JSON.stringify(item))
                      }
                    >
                      <div className="home-card2">
                        <div>
                          <Heart
                            className="ai-out"
                            isClick={this.state.isClick}
                            onClick={(e) => this.handleClick(e)}
                          />
                        </div>
                        <div>
                          <img
                            className="home-card2-img"
                            src={`https://zocoly-backend.herokuapp.com${item.item_files[0].image}`}
                            alt="product-pic"
                          />
                        </div>
                        <div>
                          <p className="card2-text">{item.Title} </p>
                        </div>

                        {/* cards part two */}

                        <div className="homecard-content">
                          <div className="content1">
                            {/* <h3 className="rating">Rating</h3> */}
                            <ReactStars
                              classNames="rating"
                              count={5}
                              onChange={this.ratingChanged}
                              size={18}
                              activeColor="#ffd700"
                            />
                            <h2 className="price">${item.Price}</h2>
                          </div>
                          <div className="content2">
                            <button className="homecard-button">
                              <img
                                className="content2-img"
                                src={whitecart}
                                alt="white-cart"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row paginat">
                <Col className="justify-content-center">
                  <Pagination>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{15}</Pagination.Item>
                    <Pagination.Item>{">"}</Pagination.Item>
                  </Pagination>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function AccordModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header className="mybut mt-2" closeButton closeLabel="">
          <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
        </Modal.Header>
      </Container>
      <hr className="mod-line" />
      <Modal.Body scrollable="true">
        <Accordion
          handleCategoriesClick={props.handleCategoriesClick}
          handleSizeClick={props.handleSizeClick}
          handleDiscountClick={props.handleDiscountClick}
          handleColorClick={props.handleColorClick}
        />
      </Modal.Body>
      <Modal.Footer>
        <button className="but-filter" onClick={props.onHide}>
          Apply Filter
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default HomeContent;
