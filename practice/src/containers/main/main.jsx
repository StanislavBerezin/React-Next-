import React, { Component } from "react";
import Hook from "../../hooks/display";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import "./main.css";

class Main extends Component {
  componentDidMount() {
    console.log(this.props.stateName);
    // console.log(this.props.stateName);
    // this.props.console_inside();
    // console.log("hey");
  }

  render() {
    return (
      <div>
        <h1>The container view (paage)</h1>
        <Hook />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateName: state.inside_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    console_inside: () => dispatch({ type: actionTypes.DO_SOMETHING_1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
