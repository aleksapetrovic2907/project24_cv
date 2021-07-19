import React, { Component } from "react";
import uniqid from "uniqid";
import QualItem from "./QualItem";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      default: {
        id: uniqid(),
        school: "",
        from: "",
        to: "",
        qualification: "",
      },
      activeForm: false,
      activeButton: true,
      quals: [],
    };
  }

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton,
    });
  };

  handleAdd = () => {
    this.toggleForm();
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      default: { ...this.state.default, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      quals: [...this.state.quals, this.state.default],
    });

    this.resetForm();
    this.toggleForm();
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.toggleForm();
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      default: {
        ...this.state.default,
        id: uniqid(),
        school: "",
        from: "",
        to: "",
        qualification: "",
      },
    });
  };

  handleDelete = (id) => {
    const filteredQuals = this.state.quals.filter((qual) => {
      return qual.id !== id;
    });

    this.setState({
      quals: filteredQuals,
    });
  };

  render() {
    let hiddenForm = this.state.activeForm
      ? "form-inline"
      : "form-inline d-none";
    let hiddenButton = this.state.activeButton
      ? "btn btn-primary"
      : "btn btn-primary d-none";

    const displayQual = this.state.quals.map((qual) => {
      return (
        <QualItem data={qual} key={qual.id} handleDelete={this.handleDelete} />
      );
    });

    return (
      <div className="padded-x">
        <h1 className="display-6">Education</h1>

        {displayQual}

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="school">Name of University or School:</label>
            <input
              type="text"
              name="school"
              className="form-control w-25"
              onChange={this.handleChange}
              value={this.state.default.school}
            />
          </div>

          <div className="form-group">
            <label for="from">From:</label>
            <input
              type="text"
              name="from"
              placeholder="YYYY"
              className="form-control w-25"
              onChange={this.handleChange}
              value={this.state.default.from}
            />

            <label for="to">To:</label>
            <input
              type="text"
              name="to"
              placeholder="YYYY"
              className="form-control w-25"
              onChange={this.handleChange}
              value={this.state.default.to}
            />
          </div>

          <div className="form-group">
            <label for="qualification">Qualification/Degree:</label>
            <input
              type="text"
              name="qualification"
              className="form-control w-25"
              onChange={this.handleChange}
              value={this.state.default.qualification}
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

export default Education;
