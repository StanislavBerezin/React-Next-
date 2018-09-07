import React from 'react'

const cockpit = (props)=>{
    return(
        <div>
            <button 
            onClick={ props.clicked}>
            Switch
            </button>
            <p > Welcome to this </p>
            
        </div>
    )
}

export default cockpit;