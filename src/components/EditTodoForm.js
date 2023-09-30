import React , {useState}from 'react'

export default function EditTodoForm({editTodo, todo}) {
    const [value, setValue]= useState(todo.task);
    const handleSubmit = e => {
        e.preventDefault(); 
        editTodo(value, todo.id);
       
    }
        
  return (
    <>
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text"  placeholder='Update Task '
        value={value} className='todo-input'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
    </>
   
  )
}
