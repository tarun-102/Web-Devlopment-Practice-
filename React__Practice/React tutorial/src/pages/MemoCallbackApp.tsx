import { useState, useMemo, useCallback } from "react";
import AppButton from "../components/AppButton";

const MemoCallbackApp = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [list, setList] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState("");

  const expensiveCalculation = useMemo(() => {
    return list.map((num) => num * 2);
  }, [list]);

  const themeStyle = {
    backgroundColor: dark ? "#212529" : "#f8f9fa",
    color: dark ? "#FFF" : "#000",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "1px solid #495057",
  };

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const addNumber = () => {
    if (!inputValue) return;
    setList([...list, Number(inputValue)]);
    setInputValue("");
  };

  return (
    <div className="container mt-5 text-center" style={{ maxWidth: "500px" }}>
      <h3 className="text-white mb-4">useMemo & useCallback</h3>
      
      <div style={themeStyle}>
        <h5>Count: {count}</h5>
        <AppButton className="btn-primary m-2" onClick={increment}>
          Increment
        </AppButton>
        <AppButton className="btn-secondary" onClick={() => setDark(!dark)}>
          Change Theme
        </AppButton>
      </div>

      <div className="mt-4">
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Add number..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AppButton className="btn-success" onClick={addNumber}>
            Add to List
          </AppButton>
        </div>

        <div className="text-white text-start bg-dark p-3 rounded border border-secondary">
          <h5 className="text-white">Original List:</h5>
          <p className="text-light">{list.join(", ")}</p>
          <h5 className="text-white">Memoized List (Double):</h5>
          <p className="text-success mb-0 fw-bold">{expensiveCalculation.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default MemoCallbackApp;