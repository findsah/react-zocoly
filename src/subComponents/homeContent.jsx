import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../CSS/home.css";
import Accordion from "./utils/homeAccordion";
import HomeCard from "./utils/homeCard";
import { Pagination, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class HomeContent extends Component {
  state = {
    modalShow: false,
  };
  render() {
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
                  Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">name</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">data</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">type</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">size</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">tags</Dropdown.Item>
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
                />
                {console.log(this.state.modalShow)}
              </div>
            </div>
          </div>
        </div>

        {/* cards and accordion */}
        <div className="container mycont">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 accordiana">
              <Accordion />
            </div>
            <div className="col-lg-9 ">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 res">
                  <HomeCard />
                </div>
              </div>
              <div className="row paginat">
                <Col className="justify-content-center">
                  <Pagination>
                    {/* <Pagination.Prev /> */}
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

            {/* pagination */}
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
      <Modal.Header className="mybut" closeButton closeLabel="">
        <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable="true">
        <Accordion />
      </Modal.Body>
      <Modal.Footer>
        <button className="but-filter"> Apply Filter </button>
      </Modal.Footer>
    </Modal>
  );
}

export default HomeContent;
