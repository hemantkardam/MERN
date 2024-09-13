import React from 'react'
import './header.css'
const Header = (props) => {
  return (
    <>
    <div>
    <p>{props.value[0]}</p>
    <h1>{props.name}</h1>
    <h1>Header</h1>
    <button style={{color:"red"}}>Submit </button> 
    <button>Submit </button> 
    <button>Submit </button> 
    <button>Submit </button> 
    <h1>Footer</h1>  
    <button>Submit </button> 
    <h1>Footer</h1>  
    <button>Submit </button> 
    <h1>Footer</h1>  
    <button>Submit </button> 
    <h1>Footer</h1>  
    <button>Submit </button> 
    <h1>Footer</h1>  
    </div>
    </>
  )
}

export default Header
