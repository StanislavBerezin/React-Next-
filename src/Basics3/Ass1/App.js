import React, { Component } from 'react';
import './App.css';
import UserInput from "./Ass1/UserInput"
import UserOutput from "./Ass1/UserOutput"



class App extends Component {
  state = {
    persons: [
      {name: "Stas"},
      {name: 'Morgan'}
    ]
  }
  //event that is calling it
  //and event target value is what input is getting
  nameChanged = (event) =>{
    this.setState({
      persons: [
        {name: "Stas"},
        {name: event.target.value}
      ]
    })
  }


  render() {
 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
    }
    return (
      <div className="App">
        <UserInput change = {this.nameChanged} ></UserInput>
        <UserOutput 
          
          name={this.state.persons[1].name}></UserOutput>
      </div>
    );


    // this is what the code looks like after its compiled from JSX
    // return React.createElement('div', {className:'App'},
    //      React.createElement('h1',null, 'Im here'))
  }
}

export default App;
