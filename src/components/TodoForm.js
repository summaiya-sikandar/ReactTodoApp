import React , {useState}from 'react'

export default function TodoForm({addTodo}) {
    const [value, setValue]= useState('');
    const handleSubmit = e => {
        e.preventDefault(); 
        addTodo(value);
        setValue("");
    }
        
  return (
    <>
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text"  placeholder='What is the task today? ' value={value} className='todo-input'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
    </>
   
  )
}
