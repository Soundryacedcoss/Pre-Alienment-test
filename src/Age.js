import React, { createContext, useState } from 'react'
import { Color } from './Color';
// creating context..
export const ageContext=createContext()
export const Age = () => { 
   const[AgeData,setAgeData]=useState([])
   // Fatching api here
   const FatchAgeHandler=()=>{
    fetch('https://dummyjson.com/users/filter?key=age&value=30&limit=1')
    .then((response) => response.json())
        .then((val)=>
        setAgeData(val.users))
   }
  return (
    <div>
      <ageContext.Provider value={{AgeData,setAgeData}}>
        <button onClick={FatchAgeHandler}>Fatch Age</button>
       
      <hr />
      <Color/>
      </ageContext.Provider>
    </div>
  )
}
