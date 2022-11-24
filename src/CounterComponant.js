import React, { useState } from 'react'
export const CounterComponant = () => {
    const[CounterValue,setCounterValue]=useState(0)
    const ClickButtonHandler=()=>{
        let temp=CounterValue
        temp+=5
        setCounterValue(temp)
    }
  return (
    <div>
        <p>Count={CounterValue}</p>
        <button onClick={ClickButtonHandler}>Click Here</button>
    </div>
  )
}
