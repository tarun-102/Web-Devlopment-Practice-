import { createContext, type Dispatch } from "react";

interface CounterState {
  count: number;
}

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

interface CounterContextType {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}

const CounterContext = createContext<CounterContextType | null>(null);

export default CounterContext;

export type { CounterState, CounterAction };