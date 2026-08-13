import { useContext } from "react";

import CounterContext from "../src/context/CounterContext"

const useCounter = () => {
    return useContext(CounterContext)
}

export default useCounter;