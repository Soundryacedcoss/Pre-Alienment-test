import React, { createContext, useContext, useState } from 'react'
import { Gender } from './Gender';
// creating context..
export const ColorContext=createContext()
export const Color = () => {
  const[color,setColor]=useState([])
  // Fatching api here
    const FatchDataHandler=()=>{
        fetch('https://dummyjson.com/users/filter?key=hair.color&value=Black&limit=1')
        .then((response)=>response.json())
        .then((val)=>setColor(val.users))
    }
    console.log(color);
    var temp=[]
    temp.push(color.users)
    console.log(temp);
  return (
    <div>
      <ColorContext.Provider value={{color,setColor}}>
        <button onClick={FatchDataHandler}>Fatch Color</button>
        <hr />
      <Gender/>
      </ColorContext.Provider>
    </div>
  )
}
