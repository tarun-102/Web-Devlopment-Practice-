import { useAppDispatch,useAppSelector } from './hooks/useRedux'
import { increment,decrement,reset,setCount } from './app/counterSlice'
import './App.css'

function App() {
  const dispatch = useAppDispatch();
  const count  = useAppSelector((state) => state.counter.count )

  return (
   <>

    <h1>Count: {count}</h1>

    <button onClick={() => {
      dispatch(increment())
    }}>+</button>

        <button onClick={() => {
      dispatch(decrement())
    }}>-</button>

        <button onClick={() => {
      dispatch(reset())
    }}>reset</button>


          <button
        onClick={() => {
          dispatch(setCount(100));
        }}
      >
        Set 100
      </button>

   </>
  )
}

export default App
