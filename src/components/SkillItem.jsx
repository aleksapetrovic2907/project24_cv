import React from "react";

const SkillItem = (props) => {
  return (
    <div className="my-3">
      <span>{props.skill}</span>
      <span
        style={{ fontWeight: "bolder", padding: "0px 5px"}}
        className="btn btn-danger mx-2"
        onClick={() => {
          props.handleDelete(props.skill);
        }}
      >
        <span style={{ fontSize: "12px" }}>DELETE</span>
      </span>
    </div>
  );
};

export default SkillItem;
