import React, { useState } from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid';

uuidv4();

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {isComplete:false ,isEditing: false , task: todo, id: uuidv4()}])
        console.log(todos)
    }
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id? {...todo, isComplete: !todo.isComplete }: todo))
    }

    const deleteTodo = id => {
       setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo= (id) => {
        setTodos(
            todos.map((todo)=>
                todo.id === id?  {...todo, isEditing: !todo.isEditing}: todo))
   
                }
    const editTask= (task, id) => {
        setTodos(
            todos.map((todo)=>
             todo.id === id?  {...todo, task, isEditing: !todo.isEditing}: todo))
    }
  return (
   <div className='TodoWrapper'>
    <h1>Get things done!</h1>
     <TodoForm addTodo={addTodo}/>
     {todos.map((todo )=>(
        todo.isEditing ? (
             <EditTodoForm editTodo={editTask} todo={todo}/>
              ) : (
            <Todo 
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
        )
          
     ))}
    
   </div>

  
   
  )
}
