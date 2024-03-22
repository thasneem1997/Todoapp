import React from 'react'

const ListTask = ({tasks,deletetask,index}) => {
  return (
    <div className='list-task'>
      <h1>{tasks.title}</h1>
      <button onClick={()=>{deletetask(index)}}>Delete</button>
    </div>
  )
}

export default ListTask
