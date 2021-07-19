import React from "react";

const QualItem = (props) => {
  return (
    <div className="my-2">
      <div>
        <h5>
          {props.data.school}
          <span
            style={{ fontWeight: "bolder", padding: "0px 5px" }}
            className="btn btn-danger mx-2"
            onClick={() => {
              props.handleDelete(props.data.id);
            }}
          >
            <span style={{ fontSize: "12px" }}>DELETE</span>
          </span>
        </h5>{" "}
        <h6>{props.data.qualification}</h6>
        <p className="text-muted">
          {props.data.from} - {props.data.to}
        </p>
      </div>
    </div>
  );
};

export default QualItem;
