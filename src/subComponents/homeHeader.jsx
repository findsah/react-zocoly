import React, { Component } from "react";
import "../CSS/home.css";
import whitecart from "../assets/template2assets/icons/white-cart.png";
import { getProduct, getitems } from "./../services/callingServices";
//import product from "../assets/template2assets/images/product.png";

class Header extends Component {
  state = {
    cards: [],
  };

  componentDidMount = async () => {
    const product = await getProduct();
    const productName = product[0].name;

    const data = await getitems(productName);
    this.setState({ cards: data });
  };

  render() {
    const cards = this.state.cards;
    //console.log(cards);
    return (
      <div className="container">
        <div className="row showinscroll" id="showinscroll">
          <div className="check">
            {cards.slice(0, 3).map((card, index) => (
              <div className="col-sm-4 col-md-4 col-lg-4 col-card" key={index}>
                <div className="card">
                  <img
                    className="card-image"
                    src={`https://zocoly-backend.herokuapp.com${card.item_files[0].image}`}
                    alt="productImage"
                  />
                  <div className="product-content">
                    <div className="content1">
                      <h3 className="product-h3">{card.product_name}</h3>
                      <h2 className="product-h2">${card.Price}</h2>
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
