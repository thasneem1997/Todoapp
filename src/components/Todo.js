import React, { useState } from 'react'
import Addtask from './Addtask'
import ListTask from './ListTask'
import { useEffect } from 'react'

function Todo() {
useEffect(()=>{
  document.title=`you have ${task.length} pending task `//this useeffect used here for updating pending task in title bar
})
const [task,settask]=useState([]);
const addtodo=(title)=>{//function to add task
  const newtask=[...task,{title}]
  settask(newtask)
}
const deletetask=(index)=>{//function for delete task
  const deleteitem=[...task]
  deleteitem.splice({index},1)//splice method is used here to delete the item with the corresponding index
  settask(deleteitem)

}

  return (
    <div className='todo-container'>
        <h1 className='heading'>TODO APP</h1>
        <Addtask key={task.title}  addtodo={addtodo} />
        {
          task.map((tasks,index)=>{
            return(<ListTask tasks={tasks} deletetask={deletetask} index={index}/>);
          })
        }
       
  
       
      
      
    </div>
  )
}

export default Todo
