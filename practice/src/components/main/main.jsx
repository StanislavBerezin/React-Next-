import React, { Component } from "react";
import Hook from "../../hooks/display";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Inside of main</h1>
        <Hook />
      </div>
    );
  }
}

export default Main;
