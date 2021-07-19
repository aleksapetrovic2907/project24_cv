import React, { Component } from "react";
import EditableLabel from "./EditableLabel";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info padded-x">
        <div className="left">
          <EditableLabel className="display-2" value="Full Name" tag="h1" />
          <EditableLabel className="text-muted" value="Occupation" tag="h2" />
        </div>
        <div className="right">
          <EditableLabel className="text-muted" value="Country" tag="h6" />
          <EditableLabel className="text-muted" value="City" tag="h6" />
          <EditableLabel className="text-muted" value="Address" tag="h6" />
          <EditableLabel className="text-muted" value="Zip Code" tag="h6" />
          <EditableLabel className="text-muted" value="Phone" tag="h6" />
          <EditableLabel className="text-muted" value="E-mail" tag="h6" />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
