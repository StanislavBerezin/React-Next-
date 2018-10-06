# Intro to react

create-react-app (name)

# Quickies

1. this.state.persons.map((person, index)) in this case index will show us the index of each person
   2)Error boundary to use when an error might happen to a component
2. Can refactor the code by segragating components like <Persons> but be sure to pass props of states, and functions.
   4)Statefull (class App extends component), Stateless (const xy = (props)=>{}).
3. To scope css styles 111, `npm eject`
   6)Passing function in prop <Component functioName = {()=> props.insideOfThisClassFunctionName(can send a prop too)}> and then inside of that component <button onClick={props.functioName}>

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

# REDUX

There is a central store, a component that wishes to change a state dispatches an action, which reaches a reducer that gets an old state and changes it to the new one in central store. To get an updated version of a state our component can susbsribe to changs. Store can only be made with reducers.

To start working

```
const redux = require('redux');
const createStore = redux.createStore;

const initState = {
  number:
}


<!-- reducer, by defaul need to setup something if not defined yet, everytime when store.dispatch({type: "NAME"}) we need to define the logic in rootReducer-->

const rootReducer = (state = initState, action) =>{
  if(action.type === 'INC_COUNTER'){
    return {
      <!-- always get the state first -->
      ...state
      <!-- then the things we need to change -->
      number: state.number + 1

    }

      <!-- or can access the payload by action -->
      if(action.type === 'ADD_COUNTER){
        <!-- will display the object we put inside -->
        console.log( action.payload)
      }
  }
  return state
}


<!-- store -->
const store = createStore(rootReducer)

console.log(store.getState())
<!-- will return us the state of this application. -->
```

TO DISPATCH ACTIONS

when we dispatch it, it will go to our rooReducer and look for action.type that matches these ones.

```
store.dispatch({type: 'INC_COUNTER'})
<!-- we can also add payload or anything -->
store.dispatch({type: 'ADD_COUNTER', payload})
```
