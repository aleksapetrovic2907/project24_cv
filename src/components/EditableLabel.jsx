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

  handleKeyDown = (e) => {
    // if 'ENTER' is pressed
    if (e.target.value === 13)
    {
        this.setState({
            isEditing: false,
        });
    }
  };

  render() {
    return this.state.isEditing ? (
      <input
        type="text"
        text={this.state.text}
        onKeyDown={this.handleKeyDown}
      />
    ) : (
      <this.state.tag onDoubleClick={this.handleClick}>asd</this.state.tag>
    );
  }
}

export default EditableLabel;
