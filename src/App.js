import React, { Component } from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
// import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Resume />
      </React.Fragment>
    );
  }
}

export default App;
