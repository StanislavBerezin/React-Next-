# Intro to react

Usefull links

- Animations https://react-spring.surge.sh/

# Quickies

- <React.Fragment> instead of <Aux>
- .bind(this, what_to_pass) should be used onClick event and other elements if we want to pass a certain identifier
- `this.state.persons.map((person, index))` in this case index will show us the index of each person
- Can refactor the code by segragating components like <Persons> but be sure to pass props of states, and functions. Statefull (class App extends component), Stateless (const xy = (props)=>{}).
- To scope css styles, `npm eject`
- Passing function in prop `<Component functioName = {()=> props.insideOfThisClassFunctionName(can send a prop too)}>` and then inside of that component `<button onClick={props.functioName}>`
- Better use concat() insead of push() when updating array in REDUX.

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

# AJAX , HTTP requests

Use axios and set the links there, prefereably in production to use nginx to map the calls to server and load balance it
Interceptors, can be used for auth headers, tokens etc

https://www.npmjs.com/package/axios

```
//can be request or response
//can implement any needed functionality inside of the request
/can console.log(request) to see what you are working with.
axios.interceptors.request.use(request=>{




   return request

},error =>{

   return Promise.reject(error)

})


//if need to remove the interceptor then just need to store it in a variable

var here = axios.interceptors.request.use........

//and to remove
axios.interceptors.request.eject(here)
```

# Routing

npm install --save react-router-dom, then in index js `import {BrowserRouter} from react-router-dom`

```
const app = (
   <BrowserRouter>
   <App/>
   </BrowserRouter>
)
```

and put that in ReactDOM.render instead of `<App/>`

Then in any file we want to include routing usually in navigation or layout

```
import {Route} from 'react-router-dom'

inside of render

<Route path = "/home" component={Name of that component to load}>

OR instead of `componentn={}'

<Router path = "home" render={()=>(<NameOfPage  PLUS_CAN_PASS_PROPS={this.state.YOURS}>)}

```

If we want to access information from previous page that navigated user to current page we should
add `export default withRouter(component name)` withRouter is imported by from 'react-router-dom'
with `console.log(props)` we would be able to see all the info.

Programmatically would be `this.props.history.push('/link')`
or `this.props.history.goBack()` will put u back where u came from and `this.props.history.replace('/link')`

Put querieis in params -

```
const queryParams = []
for (let i in this.state.YOURS){
   queryParams.push(encodeURIComponent(i) + '=' encodeURIComponent(this.state.YOURS[i])
}

const joinedString = queryParams.join('&')

this.props.history.push({
   pathname:'/link',
   search: joinedString
})
```

and to retrieve it
`const query = new URLSearchParams(this.props.location.search)`

# Hooks

More of these samples in Hooks folder

- const [value, setValue]= useState("") to hold data and set data
- useEffect(function to execute) or (()=>{ CODE }, []) when components loads the first time, good for http and fetching.
- const Variable = useContext(Wrapper), something that can be accessed throughout the app if wrapped in the createContext

* useState()

Something that combines class-based(page) component and functional component. To use it `import React, {useState} from 'react'`, its something quite similar to state: in class based. Always use in a root, not inside of if statements or inside of functions.

To make it happen inside of the component:

Note this method decouples states into seperate branches
there is however a way to combine all states into one useState({});

```
const todo = props => {

  //here we type, and inside we can put an object {}, string "", bool //false, or an array [], or function. Basically telling what we want //to keep in the state, better use array destructre to hold the values. The first one "inputState" is the value itself, and the second is used to set the value of that state. Essentially "useState" has 2 elements inside, value and setting that value method


 //work with string
  const [todoName, setTodoName] = useState('');
  //work with array
 const [todoList, setTodoList] = useState([]);


 const inputChangeHandler = event =>{
   //this is how to update that state
   setTodoName(event.target.value)
 }

const todoAddHandler()=>{
  //this is how to add new items to that state
  setTodoList(todoList.concat(toDoName))
}
  return(

      <React.Fragment>
        <input
        type="text"
        onChange={inputChangeHandler}
        value={todoName}
        >
        <button onClick={todoAddHandler}>
       </React.Fragment>
  )
}
export default todo;
```

If want to combine all of them, although it becomes far more cluttered
because they are loosley coupled we have to change both of them everytime we want to change at least one of them, not very beneficial.

```
const [todoState, setTodoState] = useState({userInput:"", todoList:[]})
 const inputChangeHandler = event =>{


   //because there are multiple objects we have to specify all of them
   //very inneficient


   setTodoState({
     userInput:event.target.value,
     todoList: todoState.todoList
     })
 }

const todoAddHandler()=>{
  setTodoState({
    userInput: todoState.userInput,
    todoList: todoState.todoList.concat(todoState.userInput)
    })
}

```

- useEffect

It takes 2 arguemtns, the function to execute and a set of values we want it to look at before it executes again, in the example below we want it to look if todoName has changed, or if u want it to run only once when mounted, then just pass an empty array []. Otherwise it will continue executing infinitively, can be used for fixing UI rendering, when its failing to update something when in fact some new items have been addedd to db.

```
  useEffect(() => {
    axios.get('url').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name });
      }
    setTodoList(todos)
    });
  return()=>{
    console.log("executing as a cleanup")
  }
  }, [todoName]);

```

- useContext() with React.CreateContext
- toggling components

(1) When we want to switch between components, lets assume we have tabs that we want to toggle in between.

(2) createContext and useContext() hooks, used to get in data throughout the app if a component has been wrapped in context.

same app.js

```
(2)
import AuthContext from './auth-context';


const app = props => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);


(1 - to change)<!-- //it is changed through .bind(this, newValue) -->

  const switchPage = pageName => {
    setPage(pageName);
  };

(2 to set it)//here we change the value
  const login = () => {
    setAuthStatus(true);
  };

  return (
    <div className="App">

   (2 to wrap it) <!-- wrapping effect takes place here in AuthContext.Provider where we pass the value from useState, hence all of the components that are wrapped (Header, Auth, Todo) have access to this context -->

      <AuthContext.Provider value={{ status: authStatus, login: login }}>


   (1 setting new value)<!-- //when we press on either of them, we pass //new value to switch page, in the first // case its todos and another auth, which //is then rendered after


        <Header
          onLoadTodos={switchPage.bind(this, 'todos')}
          onLoadAuth={switchPage.bind(this, 'auth')}
        />
        <hr />
        (1)
        {page === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
};

(2 to create it)
<!--
// and in auth-context.js -->

import React from 'react';

<!-- here we are creating context in a way of 1 variable to hold boolean and login method, which is then populated when wrapping -->

const authContext = React.createContext({
    status: false,
    login: () => {}
});

export default authContext;


(2 to access it troughout wrapped components)
  const auth = useContext(AuthContext);

  <!-- now auth has properties like
  auth.status and auth.login can use auth.status for if statements-->
```

- useReducer()

Its quite similar to setting state, but rather having a consolidate look where you can define most of your functionality in one place and dispatch when needed rather than declaring methods everywhere.

```
import React, { useReducer } from 'react';


<!-- here we make a reduce, so that everytime when a certain tipe is called through dispatch (dispatch({type: 'SET', payload: item_FOR_manipulation})) we can execute methods -->


  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };

  <!-- and lets assume inside of use effect -->
  useEffect(()=>{
    const here = "here"
     dispatch({ type: 'SET', payload: here });
  })

```

- useRef()

To point to precised html element (DOM utilsation) in react

```
import React, {  useRef } from 'react';

<!-- //creating somethng to hold the rerference -->
 const todoInputRef = useRef();

<!-- //getting value of that reference -->
const todoName = todoInputRef.current.value

<!-- //where we set this reference -->
   <input
        type="text"
        placeholder="Todo"
        ref = {todoInputRef}
      />

```

-useMemo()

to avoid redundant update

```
import { useMemo } from 'react';

 {useMemo(
        () => (
          <List items={todoList} onClick={todoRemoveHandler} />
        ),
        <!-- same as useEffect(), second argument to watch out for -->
        [todoList]
      )}

```

- Creating Custom hooks

Following the same pattern as react does by declaring our hooks like useYOURhook

```
import { useState } from 'react';

export const useFormInput = () => {
  const [value, setValue] = useState('');
  const [validity, setValidity] = useState(false);

  const inputChangeHandler = event => {
    setValue(event.target.value);
    if (event.target.value.trim() === '') {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };

<!-- these are the properties that we will be able to gain access to
the value represents that there is a string to be stored within this hook, then there is a boolean, and a method -->
  return { value: value, onChange: inputChangeHandler, validity };
};


<!-- when we call it -->

import { useFormInput } from "../location";

<!-- now todoInput has props like, todoInput.value, todoInput.validity and todo.onChange, hence having no need to declare "useState" and all of the things that were declared in our custom hook, rather it can be just import in stored in variable todoInput -->

const todoInput = useFormInput();



```

- Styling based on something

```
  const [inputIsValid, setInputIsValid] = useState(false);

    const inputValidationHandler = event => {
    if (event.target.value.trim() === "") {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

<!--  -->
    <input

        style={{
          backgroundColor: inputIsValid === true ? "transparent" : "red"
        }}
      />

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
