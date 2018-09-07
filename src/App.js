import React, { Component } from 'react';
import './App.css';
import Persons from './Persons'
import Cockpit from './Cockpit'


class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Stas", age: 25},
      {id: "2", name: "Gris", age: 21}
    ],
    showPersons: false
  }

  // by using arrow function we make sure
  // that this. belongs to this class
  togglePersonsHandler= ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }
  deletePersonHandler = (personIndex) =>{
    //   slice at the end copies the whole array
    // or alternative const persons = [...this.state.persons] will put everything in this new array
        const persons = this.state.persons.slice();
        // removing this element at person index, just 1 element
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
  }
  render() {
    const style = {
        backgroundColor:"green"
    }
    let persons = null

    if(this.state.showPersons){
      persons = (
         
        <div>
            {/* map returns a new array, index is gien for free */}
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler} ></Persons>
          <h1>Secret content</h1>
        </div> 
      )
      style.backgroundColor = "red"
    }
    // binds "red bold"
    let classes = ['red'];

    return (
      <div className="App">
       <Cockpit
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}></Cockpit>
        {persons}
       
         

        
      </div>
    );


 
  }
}

export default App;
