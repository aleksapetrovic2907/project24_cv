import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Education from "./Education";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-body">
            <PersonalInfo />
            <hr />
            <Education />
            <hr />
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
