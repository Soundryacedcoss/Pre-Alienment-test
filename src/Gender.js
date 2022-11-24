import React, { useContext, useState } from 'react'
import { ageContext } from './Age'
import { ColorContext } from './Color'
export const Gender = () => {
  // Using age context here
  const AgeContextData=useContext(ageContext)
  // using color context
  const ColorContextData=useContext(ColorContext)
  const[gender,setGender]=useState([])
    const FatchGenderHandler=()=>{
      // fatching api..
        fetch('https://dummyjson.com/users/filter?key=age&value=30&limit=1')
        .then((response) => response.json())
        .then((val)=>setGender(val.users))
    }
  return (
    <div>
        <button onClick={FatchGenderHandler}>Fatch Gender</button>
        <table><tr><th>ID</th> <th>Name</th> <th>Age</th><th>Color</th><th>Gender</th></tr>
     <tr>
             {AgeContextData.AgeData.map((item)=><><td>{item.id}</td><td>{item.firstName}</td> <td>{item.age}</td></> )}
          <td>{ColorContextData.color.map((item)=><>{item.hair.color}</>)}</td>  
           <td> {gender.map((item)=><td>{item.gender}</td>
            )}</td>
     </tr>
      </table>
    </div>
  )
}
