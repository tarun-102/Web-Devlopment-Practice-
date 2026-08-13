
import React, { useEffect, useRef, useState } from 'react'
import './App.css'

interface User {
  id: number,
  name: string,
  email : string
}

function App() {
    const [count,setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
      }

      useEffect(() => {
        const fetchuser = async () =>{
          const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

          const data :User = await response.json()
          setUser(data)
        }

        fetchuser()
      },[])

      const inputRef = useRef<HTMLInputElement>(null) ;
  return (
    <>

    <h1>Count: {count}</h1>
    <button onClick={() => {
      setCount((prew) => prew + 1 )
    }}>+</button>

     <button onClick={() => {
      setCount((prew) => prew - 1 )
    }}>-</button>

     <button onClick={() => {
      setCount(0)
    }}>+</button>

        <h1>User details</h1>
        {user && <h1>{user.name}</h1>   }
        {user && <h1>{user.email}</h1>   }
    <button onClick={() => {
      setUser({
        id: 1,
        name: "rohhit",
        email: "ssdsascsc"
      })
    }}>set user</button>

    <input ref={inputRef} />
    <button onClick={() => {
        inputRef.current?.focus();
      }}>
        Focus
      </button>

      <button onClick={() => {
        if(inputRef.current){
          inputRef.current.value = ""
        }
      }}>
        Clear
      </button>
    <input type="text" onChange={handleChange} />
      



    </>
  )
}

export default App
