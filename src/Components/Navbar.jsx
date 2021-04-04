import React, { Component } from "react";
import "../CSS/navbar.css";
import { Nav, Navbar, Form } from "react-bootstrap";
import logo from "../assets/template2assets/icons/logo.png";
import cart from "../assets/template2assets/icons/cart.png";
import user from "../assets/template2assets/icons/user.png";
import search from "../assets/template2assets/icons/search.png";
import { FaGreaterThan } from "react-icons/fa";
import { withRouter } from "react-router";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item = JSON.parse(localStorage.getItem("item"));
    const pathname = this.props.history.location.pathname;

    return (
      <div className="main-navbar">
        <div className="container">
          <Navbar bg="" expand="lg">
            <Navbar.Toggle
              className="navbar-toggle"
              aria-controls="basic-navbar-nav"
            />
            {pathname === `/productdetail/${item.id}` ? (
              <div className="product-data">
                <div className="prod-name">{item.Title}</div>
                <div className="first-para">
                  {item.collection_name}{" "}
                  <FaGreaterThan className="greator-sign" />
                  {item.product_name}
                </div>
              </div>
            ) : (
              <></>
            )}
            <Navbar.Brand className="navbar-brands" href="#home">
              <img src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Brand className="responsive-brand" href="#home">
              <Nav.Link className="for-position" href="#home">
                <img src={cart} width="28px" height="28px" alt="logo" />
                <span className="products-count">13</span>
              </Nav.Link>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link className="content" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="content" href="/productdetail">
                  Men
                </Nav.Link>
                <Nav.Link className="content" href="#home">
                  Women
                </Nav.Link>
                <Nav.Link className="content" href="#link">
                  Kids
                </Nav.Link>
                <Nav.Link className="content" href="#home">
                  Collections
                </Nav.Link>
                <Nav.Link className="content" href="#link">
                  Sale
                </Nav.Link>
              </Nav>
              <Form className="search">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="search-button">
                  <img src={search} width="28px" height="28px" alt="search" />
                </button>
              </Form>
              <div className="responsive-display">
                <Nav.Link className="for-position" href="#home">
                  <img src={cart} width="28px" height="28px" alt="logo" />
                  <span className="products-count">13</span>
                </Nav.Link>
              </div>
              <Nav.Link href="#link">
                <img src={user} width="28px" height="28px" alt="logo" />
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default withRouter(Topbar);
