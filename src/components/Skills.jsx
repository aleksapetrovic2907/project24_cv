import React, { Component } from "react";
import SkillItem from "./SkillItem";
import uniqid from "uniqid";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skill: "",
      skills: [],
      activeForm: false,
      activeButton: true,
    };
  }

  handleAdd = () => {
    this.toggleForm();
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.toggleForm();
    this.resetForm();
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      skills: [...this.state.skills, this.state.skill],
    });

    this.toggleForm();
    this.resetForm();
  };

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton,
    });
  };

  resetForm = () => {
    this.setState({
      skill: "",
    });
  };

  handleDelete = (id) => {
    const filteredSkills = this.state.skills.filter((skill) => {
      return skill !== id;
    });

    this.setState({
      skills: filteredSkills,
    });
  };

  render() {
    let hiddenForm = this.state.activeForm ? "" : "d-none";
    let hiddenButton = this.state.activeButton
      ? "btn btn-primary"
      : "btn btn-primary d-none";

    const displaySkills = this.state.skills.map((skill) => {
      return (
        <SkillItem
          skill={skill}
          key={uniqid()}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div className="padded-x">
        <h1 className="display-6">Skills</h1>

        <div>{displaySkills}</div>

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div>
            <label for="skill" className="my-1">
              My skill is:{" "}
            </label>
            <input
              type="text"
              name="skill"
              className="form-control w-25"
              value={this.state.skill}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-buttons py-2">
            <button className="btn btn-success">SAVE</button>
            <button
              className="btn btn-outline-danger mx-2"
              onClick={this.handleCancel}
            >
              CANCEL
            </button>
          </div>
        </form>

        <button className={hiddenButton} onClick={this.handleAdd}>
          <b>+</b> Add
        </button>
      </div>
    );
  }
}

export default Skills;
