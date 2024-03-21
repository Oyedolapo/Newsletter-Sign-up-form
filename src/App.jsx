import React, { useState } from 'react'
import Card from './card/card'
import './App.css'
import Success from './success/success'

const App = () => {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [popUp, setPopUp] = useState("No")

  let myArray = value.split("")

  function updateValue(e) {
    setValue(e.target.value)
  }

function handleSubmit(e) {
    e.preventDefault();
   
    if (value.length > 0 && myArray.includes("@", ".", "com")) {
        setIsValid(true)
    } else{
        setIsValid(false)
        setPopUp("Yes")
    }
    
    
    
}
  return (
    <div className='app'>
      {!isValid ? <Card 
       value={value} 
       updateValue={updateValue}
       handleSubmit={handleSubmit}
       popUp={popUp}
       isValid={isValid}
      /> : <Success 
        value={value}
      />}
    </div>
  )
}

export default App