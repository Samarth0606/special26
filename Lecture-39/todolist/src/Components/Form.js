import React, { useState } from 'react'

const Form = (props) => {

    let [ input , setInput] = useState('');

    function inputChangeHandler(e){
        setInput(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        let newTodo = {
            id: props.todos.length ,
            todo: input
        }
        props.addTodo(newTodo);
        
        // console.log(input)
        setInput('')
    }


  return (
        <form onSubmit={submitHandler}>
            <input onChange={inputChangeHandler} type="text" name="" id="" placeholder='enter your todo here' value={input}/>
        </form>

  )
}

export default Form