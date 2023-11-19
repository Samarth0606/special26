import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    let alltodos = props.todos.map((item , index)=>{
        return <Todo key={index} index={index} id={item.id} todo={item.todo} />
    })


  return (
    <div>
        <ul>
            {alltodos}
        </ul>
    </div>
  )
}

export default TodoList