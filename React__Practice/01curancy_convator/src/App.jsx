import { useState } from 'react'
import { TodoProvider } from './COntext'
import { useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import Todoitem from './Components/Todoitem'
function App() {
  const [todos,setTodos] = useState([])

  const  addTodo = (todo) => {
    setTodos((prew) => [ {id :Date.now(),  ...todo}, ...prew])
  }

  const  updateTodo = (id,todo) => {
    setTodos((prew) => prew.map((prewTodo) => (prewTodo.id === id ? {...prewTodo, todo} : prewTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prew) => prew.filter((todo) => todo.id !== id ))
  }

  const toggleCompleted = (id) =>{
    setTodos( (prew) => prew.map((prewTodo) => prewTodo.id === id ? {...prewTodo, completed: !prewTodo.completed} :prewTodo))
  }


  useEffect(() =>{
     const todos =  JSON.parse(localStorage.getItem("todos"))

     if(todos && todos.length > 0) {
      setTodos(todos)
     }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value= {{todos, addTodo,deleteTodo,updateTodo,toggleCompleted}}>
        <div className="bg-dark min-vh-100 py-5">
  <div className="container">
    <div
      className="mx-auto shadow rounded-3 p-4 text-white"
      style={{ maxWidth: "700px" }}
    >
      <h1 className="text-center fw-bold mb-4">
        Manage Your Todos
      </h1>

      <div className="mb-4">
        <TodoForm></TodoForm>
      </div>

      <div className="d-flex flex-column gap-3">
        {todos.map((todo) => (
          <div key={todo.id} className='w-100'>
            <Todoitem  todo={todo}/>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </TodoProvider>
  )
}

export default App
