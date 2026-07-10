import { useEffect } from 'react'
import InputForm from './Components/InputForm'
import './App.css'
import TodoItem from './Components/TodoItem'
import { setTodos } from './App/Todofeture/TodoSlice'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(setTodos())
    },[])

  return (
    <>
    <div className='todo-container  bg-black text-white'> 
    <h1 className=' text-center pt-3'>Todo LIst App</h1>

    <InputForm />
    <TodoItem />
    </div>
    </>
  )
}

export default App
