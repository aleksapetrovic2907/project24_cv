import React, { Component } from "react";

class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tag: props.tag,
      default: props.value,
      className: props.className,

      isEditing: false,
    };
  }

  handleClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.save();
    }
  };

  handleBlur = () => {
    this.save();
  };

  save = () => {
    this.setState({
      isEditing: false,
    });
  };

  showText() {
    return this.state.text === "" ? this.state.default : this.state.text;
  }

  render() {
    return this.state.isEditing ? (
      <input
        type="text"
        autoFocus={true}
        text={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
        placeholder={this.state.default}
        value={this.state.text}
        className={"form-control " + this.state.className}
      />
    ) : (
      <this.state.tag
        className={this.state.className}
        onClick={this.handleClick}
      >
        {this.showText()}
      </this.state.tag>
    );
  }
}

export default EditableLabel;
