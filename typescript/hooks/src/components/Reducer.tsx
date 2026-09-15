import { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" };

const initialState: State = {
  count: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>
    </div>
  );
}

export default Reducer;