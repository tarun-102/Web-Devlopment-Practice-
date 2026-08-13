import "./App.css";
import useCounter from "./hook/useCounter"

function App() {
  const { state, dispatch } = useCounter();

  return (
    <>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
