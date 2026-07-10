import React, { useState } from 'react'
import { useTodo } from '../COntext'

function TodoForm() {
  const [todo,setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todo) return

    addTodo({todo,  completed:false})
    setTodo("")
  }
  return (
    <form className='d-flex'
      onSubmit={add}
    >
        <input 
            type="text"
            placeholder='Write TODO..'
            value={todo}
            className='w-100 px-3 border rounded  bg-white outline-none duration-150'
            onChange={(e) => setTodo(e.target.value)}
            />

            <button type='submit' 
                className='btn btn-primary '
            >ADD</button>
    </form>
  )
}

export default TodoForm