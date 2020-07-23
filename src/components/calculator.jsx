import React, { Component } from "react";
import Button from "./common/buttons";
import Display from "./display";
class Calculator extends Component {
  state = {
    buttons: ["c", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, 0, 1, 2, 3, "="],
    result: "",
  };
  handleClick = ({ currentTarget: button }) => {
    this.setState({ result: this.state.result + button.value });
  };
  handlereset = () => {
    this.setState({ result: "" });
  };
  handleAdd = (a, b) => {
    let first = parseInt(a);
    let second = parseInt(b);
    let result = first + second;
    this.setState({ result });
    return result;
  };
  handleSubtract = (a, b) => {
    let first = parseInt(a);
    let second = parseInt(b);
    let result = first - second;
    this.setState({ result });
    return result;
  };
  handleMultiply = (a, b) => {
    let first = parseInt(a);
    let second = parseInt(b);
    let result = first * second;
    this.setState({ result });
    return result;
  };
  handleDivide = (a, b) => {
    let first = parseInt(a);
    let second = parseInt(b);
    let result = first / second;
    this.setState({ result });
    return result;
  };
  handleEqual = () => {
    const answer = this.state.result.split("");
    for (let keys in answer) {
      if (answer[keys] === "+") {
        const add = this.state.result.split("+");
        this.handleAdd(add[0], add[1]);
      } else if (answer[keys] === "-") {
        const subtract = this.state.result.split("-");
        this.handleSubtract(subtract[0], subtract[1]);
      } else if (answer[keys] === "*") {
        const multiply = this.state.result.split("*");
        this.handleMultiply(multiply[0], multiply[1]);
      } else if (answer[keys] === "/") {
        const divide = this.state.result.split("/");
        this.handleDivide(divide[0], divide[1]);
      }
    }
    console.log(answer);
  };
  render() {
    console.log(typeof this.state.result);
    return (
      <div className="container col-6 my-5">
        <div className="container border border-dark display">
          <Display result={this.state.result} />
          {this.state.buttons.map((button) => {
            return (
              <Button
                value={button}
                onReset={this.handlereset}
                onClick={this.handleClick}
                onAdd={this.handleEqual}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
