import React, { Component } from "react";
import "../../CSS/home.css";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      handleCategoriesClick,
      handleSizeClick,
      handleDiscountClick,
      handleColorClick,
    } = this.props;
    return (
      <>
        <div className="accordion" aria-expanded="false" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Categories
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="no" onClick={() => handleCategoriesClick("Mens")}>
                  Men
                </p>
                <p
                  className="no"
                  onClick={() => handleCategoriesClick("Women")}
                >
                  Women
                </p>
              </div>
            </div>
          </div>
          <hr className="accord-line" />
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                On Sale
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="no" onClick={() => handleDiscountClick()}>
                  on Discount
                </p>
              </div>
            </div>
          </div>
          <hr className="accord-line" />
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Size
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="no" onClick={() => handleSizeClick("10.5")}>
                  10.5
                </p>
                <p className="no" onClick={() => handleSizeClick("20.5")}>
                  20.5
                </p>
                <p className="no" onClick={() => handleSizeClick("30.5")}>
                  30.5
                </p>
                <p className="no" onClick={() => handleSizeClick("40.5")}>
                  40.5
                </p>
              </div>
            </div>
          </div>
          <hr className="accord-line" />
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Color
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="no" onClick={() => handleColorClick("White")}>
                  White
                </p>
                <p className="no" onClick={() => handleColorClick("Black")}>
                  Black
                </p>
                <p className="no" onClick={() => handleColorClick("Red")}>
                  Red
                </p>
                <p className="no" onClick={() => handleColorClick("Blue")}>
                  Blue
                </p>
                <p className="no" onClick={() => handleColorClick("Green")}>
                  Green
                </p>
              </div>
            </div>
          </div>
          <hr className="accord-line" />
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Material
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="no"> name </p>
                <p className="no"> data </p>
                <p className="no"> type </p>
                <p className="no"> size </p>
                <p className="no"> tags </p>
              </div>
            </div>
          </div>
          <hr className="accord-last-line" />
        </div>
      </>
    );
  }
}

export default Accordion;
