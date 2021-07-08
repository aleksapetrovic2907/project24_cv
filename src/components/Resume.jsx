import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-body">
            <PersonalInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
