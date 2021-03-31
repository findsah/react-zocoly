import React, { Component } from "react";
import product from "../../assets/template2assets/images/product.png";
import whitecart from "../../assets/template2assets/icons/white-cart.png";
import Heart from "../../assets/template2assets/icons/heart.png";
import ReactStars from "react-rating-stars-component";
//import Heart from "react-animated-heart";
import "../../CSS/home.css";

class HomeCard extends Component {
  state = {
    isClick: false,
  };

  // ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };

  handleClick = (e) => {
    this.setState({ isClick: !this.state.isClick });
  };
  render() {
    return (
      <div className="card2">
        <div>
          <img className="ai-out" src={Heart} alt="Heart" />
        </div>
        <div>
          <img className="card2-img" src={product} alt="product-pic" />
        </div>
        <div>
          <p className="card2-text"> Nike Renew Run </p>
        </div>

        {/* part two */}

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
            <h2 className="price">$130</h2>
          </div>
          <div className="content2">
            <button className="homecard-button">
              <img className="content2-img" src={whitecart} alt="white-cart" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
