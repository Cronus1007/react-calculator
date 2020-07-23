import React, { Component } from "react";
class Buttons extends Component {
  state = {};
  render() {
    let { value, onClick, onReset, onAdd } = this.props;
    if (value === "c")
      return (
        <button className="col-2 btn btn-primary m-3" onClick={onReset}>
          {value}
        </button>
      );
    if (value === "=") {
      return (
        <button
          className="col-2 btn btn-primary m-3"
          value={value}
          onClick={onAdd}
        >
          {value}
        </button>
      );
    }

    return (
      <button
        className="col-2 btn btn-primary m-3"
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

export default Buttons;
