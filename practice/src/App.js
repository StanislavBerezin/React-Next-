import React, { Component } from "react";
import Main from "./containers/main/main";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav/nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/hook" component={Main} />
        </Switch>

        <h1>Mother Component(Always here) </h1>
      </div>
    );
  }
}

export default App;
