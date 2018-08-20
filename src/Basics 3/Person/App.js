import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {name: "Stas"},
      {name: 'Morgan'}
    ],
    otherState:"ssome"
  }

  //by doing this function we can use this word to access the state above
  switchNames = (newName) =>{
    //console.log("was clicke")
    this.setState({
      persons: [
        {name: newName},
        {name: 'another'}
      ]
    })
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
    //thats how to put styles manually
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
    }
    return (
      <div className="App">
        <h1>Helo</h1>
         {/* A better way  the bind thing*/}
        <button
        //this is how to apply styles
        style={style} 
       
        onClick = {this.switchNames.bind(this, "Stasyan")}>Switch name</button>
       
        <Person 
        name = {this.state.persons[0].name}
        //getting the reference to send under name changed
        changed={this.nameChanged}
        //click is a reference to function switchNames
        //inneficient way of doing it
        click ={()=> this.switchNames("Test arrow")}> Something extra </Person>
        
        <Person 
        name = {this.state.persons[1].name}> Think </Person>
      </div>
    );


    // this is what the code looks like after its compiled from JSX
    // return React.createElement('div', {className:'App'},
    //      React.createElement('h1',null, 'Im here'))
  }
}

export default App;
