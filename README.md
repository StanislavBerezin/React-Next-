# Intro to react
Cool links
- Animations https://react-spring.surge.sh/


# Quickies

1. this.state.persons.map((person, index)) in this case index will show us the index of each person
   2)Error boundary to use when an error might happen to a component
2. Can refactor the code by segragating components like <Persons> but be sure to pass props of states, and functions.
   4)Statefull (class App extends component), Stateless (const xy = (props)=>{}).
3. To scope css styles 111, `npm eject`
   6)Passing function in prop <Component functioName = {()=> props.insideOfThisClassFunctionName(can send a prop too)}> and then inside of that component <button onClick={props.functioName}>
4. Better use concat() insead of push() when updating array in REDUX.

# Core code sample

# To display contennt by conditionals

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

# Display multiple content by mapping existing set

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

# Removing a component or list based on its index

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

There is a central store, a component that wishes to change a state dispatches an action, which reaches a reducer that gets an old state and changes it to the new one in central store. To get an updated version of a state our component can susbsribe to changs. Store can only be made with reducers. Can use switch sttements instead of IF (if desired)

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

# REDUX (to dispatch actions)

when we dispatch it, it will go to our rooReducer and look for action.type that matches these ones.

```
store.dispatch({type: 'INC_COUNTER'})
<!-- we can also add payload or anything -->
store.dispatch({type: 'ADD_COUNTER', payload})
```

# REDUX (to add subscriptions)

It will listen to any updaed inside of state
usually you set it right after the store is created

```
store.subscribe(()=>{
  console.log('[Subscription]', store.getState());
})
```

# REDUX official setup

npm install -- save redux react-redux

Usually in index.js we setup the redux

```
import {createStore} from 'redux'
import reducer from './store/reducer'
<!-- we wrap our App in it -->
import {Provider} from 'react-redux'

const store = createStore(reducer);

<!-- wrap with provider and prop as store for store to use it throughout the app -->
ReactDOM.render(<Provider store={store}><App/></Provider> ......)
```

Needs a store folder and inside a file called reducer.js, and inside of that file

```
const initState = {
  number: 0
}

<!-- reducer, by defaul need to setup something if not defined yet, everytime when store.dispatch({type: "NAME"}) we need to define the logic in rootReducer-->

const rootReducer = (state = initState, action) =>{
  if(action.type === 'INCREMENT'){
    return {
      <!-- always get the state first, otherwise it removes everything else or sets it to default-->
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

export default rootReducer;
```

# REDUX access state inside of component

Now that we have redux setup throughout the entire app we need to access it in certain components. So lets say inside of component A we have the following code:

```
import {connect} from 'react-redux'

...
(1)to access a property from mapStateToProps we do the following
console.log(this.props.stateName)
...

<!-- state we defined here, is our state setup in reducer.js -->
const mapStateToProps = state =>{
  return{
      stateName: state.insideStateProperty
  };
}
<!-- now we pass the mapStateToProps in connect (NOW COME BACK TO (1)-->
export default connect(mapStateToProps)(ComponentName);
```

# REDUX access actions inside of component

Quite similar to state

```
(1)this.props.dispatchName

const mapDispatchToProps = dispatch =>{
  return{
    <!-- and that INCREMENT must be defined in our reducer.js file -->
    dispatchName: () => dispatch({type: "INCREMENT"})
  }
}

<!-- if need to access this actions (1) -->
export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);

P.S if no need to states to be imported could be just `null`
```

# REDUX pass payload to actions

```
(1)this.props.dispatchName(whateverYouNeed)

const mapDispatchToProps = dispatch =>{
  return{
    <!-- the way to access it (1) -->
    dispatchName: () => dispatch({type: "INCREMENT", payload})
  }
}
```

Then in our reducer.js file to access the payload

```
if(action.type === "INCREMENT){
  console.log(action.payload)
}
```
