import React, { useState } from 'react'
import "../App.css";
import { useDispatch } from "react-redux";
import { addTodo } from '../App/Todofeture/TodoSlice';

function InputForm() {
  const [input , setInput] = useState('');
  const dispatch = useDispatch()
  const handleformsubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <>
    <div className='form-container d-inline-block d-flex justify-content-center ' >
      <form onSubmit={handleformsubmit} className='d-flex justify-content-center align-items-center gap-3 p-3 bg-dark  rounded-3'>
        <input type="text" className='form-input' placeholder='Write Todo' 
        value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type='submit' className='btn btn-success'>Add</button>
    </form>
    </div>
    </>
  )
}

export default InputForm