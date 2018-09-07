import React from 'react'
import './Person.css'

const person = (props) =>{


    return (
        <div className="Person">

            {/* by props name we can do <Person name="HERE"></Person> */}
            {/* on click it takes a prop called click which is a reference to switchNames in parent component */}
            <p onClick={props.click}>Im a person! {props.name} and this 30 many years old</p>
            {/* anything between the brackets in App.js of <Person>LIKE HERE</Person> will
            be considered as props.children */}
            <p>{props.children}</p>
            {/* here we recieve the props.changed reference to execute a function in a parent component */}
            <input type='text' onChange={props.changed}/>>

        </div>
        )
}

export default person