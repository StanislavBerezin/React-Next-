import React, { Component } from 'react';
import './App.css';
import Person from './Person'



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
    let persons = null

    if(this.state.showPersons){
      persons = (
         
        <div>
            {/* map returns a new array, index is gien for free */}
          {this.state.persons.map((person, index) =>{
                return <Person 
                            // because its an arrow function we can use index

                            click={()=>this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            // because react does comparisions of virtual and dom and current dom
                            // so it helps to know what exactly to update
                            
                            key ={person.id}/>
          })}
          <h1>Secret content</h1>
        </div> 
      )
    }
    return (
      <div className="App">
        <button
        onClick={ this.togglePersonsHandler}>
          Switch
        </button>
        
       {persons}
         

        
      </div>
    );


 
  }
}

export default App;
