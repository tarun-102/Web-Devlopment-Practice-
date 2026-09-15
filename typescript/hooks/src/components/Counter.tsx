import { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const refCount = useRef<number>(0);

  const handleState = () => {
    setCount(count + 1);

  };

  const handleRef = () => {
    refCount.current = refCount.current + 1;

    console.log("Ref Count:", refCount.current);
  };
  return <div>
    <h1>State Count: {count}</h1>

      <button onClick={handleState}>
        Increase State
      </button>

      <br />
      <br />

      <button onClick={handleRef}>
        Increase Ref
      </button>
  </div>;
}

export default Counter;
