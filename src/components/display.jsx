import React, { Component } from "react";
class Display extends Component {
  state = {};
  render() {
    const { result } = this.props;
    // console.log(result);
    return (
      <div
        style={{ height: 65 }}
        className="container col-10 border border-dark rounded mt-4 mb-3 display"
      >
        {result}
      </div>
    );
  }
}

export default Display;
