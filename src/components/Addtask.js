import React from 'react'
import { useState } from 'react'

const Addtask = ({addtodo}) => {
  const [value,setvalue]=useState("")
  const additem=()=>{
    addtodo(value);
    setvalue("");//which makes the input box empty after displaying the task in list item
  }
  return (
    <div className='add-task'>
      <input onChange={(e)=>{setvalue(e.target.value)}}  type='text' placeholder="Add a task" value={value}/>
      <button onClick={additem}>Add</button>
    </div>
  )
}

export default Addtask
