//import React, { useState } from "react";
import React, { Component } from "react";
import whitecart from "../assets/template2assets/icons/white-cart.png";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {
    active: false,
  };

  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="col-lg-4 col-md-6 col-sm-12 res">
        <div className="home-card2">
          <div>
            <Heart
              className="ai-out"
              isActive={this.state.active}
              onClick={() => this.setState({ active: !this.state.active })}
            />
          </div>

          <div>
            <Link
              className="black-text hover"
              to={"/productdetail/" + item.id}
              onClick={() => localStorage.setItem("item", JSON.stringify(item))}
            >
              <img
                className="home-card2-img"
                src={`https://zocoly-backend.herokuapp.com${item.item_files[0].image}`}
                alt="product-pic"
              />
            </Link>
          </div>
          <div>
            <p className="card2-text">{item.Title} </p>
          </div>

          <div className="homecard-content">
            <div className="content1">
              <div className="tot-rating">
                <ReactStars
                  classNames="rating"
                  value={4}
                  count={5}
                  onChange={this.ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                />
                <p className="rate-num"> 4.5 </p>
              </div>
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
      </div>
    );
  }
}

export default Product;
