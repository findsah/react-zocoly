import React, { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../CSS/home.css";
import Accordion from "./utils/homeAccordion";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {
  getProduct,
  getitems,
  sortItems,
  CategoryItems,
  sizeItems,
  onSaleItems,
  colorItems,
} from "./../services/callingServices";
import { GrFormClose } from "react-icons/gr";
import Product from "./Product";
import ReactPaginate from "react-paginate";

class HomeContent extends Component {
  state = {
    sortType: "Sort By",
    modalShow: false,
    items: [],
    pageNumber: 0,
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
    // console.log(data);
    this.setState({ items: data });
  };

  handleDiscountClick = async () => {
    const data = await onSaleItems();
    // console.log(data);
    this.setState({ items: data });
  };

  handleColorClick = async (colorValue) => {
    const data = await colorItems(colorValue);
    // console.log(data);
    this.setState({ items: data });
  };

  handlePageChange = ({ selected }) => {
    //console.log(this.state.pageNumber);
    this.setState({ pageNumber: selected });
  };

  render() {
    const { items } = this.state;
    const itemsPerPage = 3;
    const pagesVisited = this.state.pageNumber * itemsPerPage;
    const pageCount = Math.ceil(items.length / itemsPerPage);
    // console.log(pageCount);

    return (
      <>
        <div className="container mycont">
          <div className="row dlt-mar">
            <div className="col-md-6 col-sm-12">
              <p className=" prod-head">439 Products</p>
            </div>
            <div className="col-md-6 col-sm-12 mb-3 filter-start">
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

        {/* accordion and cards */}
        <div className="container mycont">
          <div className="row dlt-mar">
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
                {items
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((item, index) => (
                    <Product item={item} key={index} />
                  ))}
              </div>
              <div className="row paginat">
                <Col className="justify-content-center">
                  <ReactPaginate
                    previousLabel="<"
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={(e) => this.handlePageChange(e)}
                    containerClassName={"pagination-buttons"}
                    previousLinkClassName={"pag-prev-butt"}
                    nextLinkClassName={"pag-next-butt"}
                    disabledClassName={"pag-disabled"}
                    activeClassName={"pag-active"}
                  />
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
      // centered
      centered={false}
      scrollable={true}
      animation={false}
      dialogClassName="home-modal"
    >
      {/* closeButton closeLabel="" */}
      <Container>
        <Modal.Header className="mybut mt-2">
          <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
          <GrFormClose className="close-but" onClick={props.onHide} />
        </Modal.Header>
      </Container>
      <Container>
        <hr className="mod-line" />
      </Container>
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
