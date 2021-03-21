import React, { Component } from "react";
import Header from "../subComponents/homeHeader";
import HomeContent from "./../subComponents/homeContent";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <HomeContent />
      </>
    );
  }
}

export default Home;
