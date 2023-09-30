import React from 'react'

export default function Todo({todo, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(todo.id)} className={`${todo.isComplete ?'completed' : '' }`}>{todo.task}</p>
      <button className='special-btn' onClick={()=> editTodo(todo.id)} >Edit</button>
      <button className='special-btn'  onClick={()=> deleteTodo(todo.id)}>Delete</button>
     
    </div>
  )
}
