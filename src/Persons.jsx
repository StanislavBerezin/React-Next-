import React from 'react'
import Person from './Person'

const persons = (props) => props.persons.map((person, index) =>{
        return <Person 
                    // because its an arrow function we can use index

                    click={()=>props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    // because react does comparisions of virtual and dom and current dom
                    // so it helps to know what exactly to update
                    
                    key ={person.id}/>
  });

export default persons;