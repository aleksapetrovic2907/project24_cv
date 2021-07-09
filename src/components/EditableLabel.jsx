import React, { Component } from "react";

class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value,
      tag: props.tag,
      default: props.value,

      isEditing: false,
    };
  }

  handleClick = () => {
    this.setState({
      text: this.state.text,
      isEditing: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    // if 'ENTER' is pressed
    if (e.target.value === 13) {
      this.save();
    }
  };

  handleBlur = () => {
    this.save();
  };

  save = () => {
    this.setState({
      text: this.state.text,
      isEditing: false,
    });

    if (this.state.text === "") {
      this.setState({
        text: this.state.default,
      });
    }
  };

  render() {
    return this.state.isEditing ? (
      <input
        type="text"
        autoFocus={true}
        text={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleBlur}
        value={this.state.text}
      />
    ) : (
      <this.state.tag onDoubleClick={this.handleClick}>asd</this.state.tag>
    );
  }
}

export default EditableLabel;
