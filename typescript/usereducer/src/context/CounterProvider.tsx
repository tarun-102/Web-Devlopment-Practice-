import { useReducer, type ReactNode } from "react";
import CounterContext from "./CounterContext";

interface CounterProviderProps {
  children: ReactNode;
}

interface CounterState {
  count: number;
}
type COunterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

const initialState: CounterState = {
  count: 0,
};

const CounterReducer = (
  state: CounterState,
  action: COunterAction,
): CounterState => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;