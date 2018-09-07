# Intro to react

# Quickies
1) this.state.persons.map((person, index)) in this case index will show us the index of each person
2)Error boundary to use when an error might happen to a component
3) Can refactor the code by segragating components like <Persons> but be sure to pass props of states, and functions.
4)

# Chunks

To display contennt by conditionals

```
<!-- in class -->
  togglePersonsHandler= ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

<!-- in render -->
render() {
    let persons = null

    if(this.state.showPersons){
      persons = (
        <div >
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

```

Display multiple content by mapping existing set
```
  render() {
    let persons = null

    if(this.state.showPersons){
      persons = (
         
        <div>
            {/* map returns a new array */}
          {this.state.persons.map(person =>{
              return <Person name={person.name}
                             age={person.age}/>
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

```

Removing a component or list based on its index
```
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

```

To pass props
```
<Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler} ></Persons>

```

Dynamic classes allocation
```


```