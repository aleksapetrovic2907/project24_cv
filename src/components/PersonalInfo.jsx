import React, { Component } from "react";
import EditableLabel from "./EditableLabel";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div className="left">
          <h1 className="display-2">Full Name</h1>
          <h2 className="text-muted">Occupation</h2>
        </div>
        <div className="right">
          <EditableLabel value="Country" tag="h6"/>
          <h6 className="text-muted">Country</h6>
          <h6 className="text-muted">City</h6>
          <h6 className="text-muted">Address</h6>
          <h6 className="text-muted">Zip Code</h6>
          <h6 className="text-muted">Phone</h6>
          <h6 className="text-muted">E-mail</h6>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
