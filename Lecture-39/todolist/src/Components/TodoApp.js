import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

const TodoApp = () => {

    let dummyArray = [
        {
            id:0,
            todo: "learn js"
        },
        {
            id:1,
            todo: "learn backend"
        },
        {
            id:2,
            todo: "do projects"
        },
        {
            id:3,
            todo: "learn react"
        },
        {
            id:4,
            todo:"get placed"
        }
    ]

    let [todos , setTodos] = useState(dummyArray)

    let addTodo = (todo)=>{
        setTodos([...todos , todo])
    }
  return (
    <div>
        <Form todos={todos} addTodo={addTodo} />
        <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp