import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";

const Todo = (props) => {
  return (
    <div>
        <li>
            <p>index: {props.index} --&gt; task: {props.todo} <span><BsFillTrashFill /></span> </p>
        </li>
    </div>
  )
}

export default Todo