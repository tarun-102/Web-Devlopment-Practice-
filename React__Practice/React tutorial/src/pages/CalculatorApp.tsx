import { useState } from "react";
import AppButton from "../components/AppButton";

const CalculatorApp = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card bg-dark text-white p-4 shadow" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-3">Calculator</h3>
        
       
        <input
          type="text"
          className="form-control mb-3 bg-secondary text-white text-end fs-3"
          value={input}
          readOnly
          style={{ height: "60px" }}
        />

        <div className="row g-2">
          <div className="col-3"><AppButton className="w-100 btn-danger fs-4 fw-bold" onClick={handleClear}>C</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-warning fs-4 fw-bold" onClick={handleDelete}>DEL</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-success fs-4 fw-bold" onClick={() => handleClick("/")}>/</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-success fs-4 fw-bold" onClick={() => handleClick("*")}>*</AppButton></div>

          
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("7")}>7</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("8")}>8</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("9")}>9</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-success fs-4 fw-bold" onClick={() => handleClick("-")}>-</AppButton></div>

       
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("4")}>4</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("5")}>5</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("6")}>6</AppButton></div>
          <div className="col-3"><AppButton className="w-100 btn-success fs-4 fw-bold" onClick={() => handleClick("+")}>+</AppButton></div>

         
          <div className="col-9">
            <div className="row g-2">
              <div className="col-4"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("1")}>1</AppButton></div>
              <div className="col-4"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("2")}>2</AppButton></div>
              <div className="col-4"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("3")}>3</AppButton></div>
              <div className="col-8"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick("0")}>0</AppButton></div>
              <div className="col-4"><AppButton className="w-100 btn-light text-dark fs-4 fw-bold" onClick={() => handleClick(".")}>.</AppButton></div>
            </div>
          </div>

          <div className="col-3">
            <AppButton 
              className="w-100 btn-success fs-3 fw-bold d-flex justify-content-center align-items-center" 
              style={{ height: "108px" }} 
              onClick={handleCalculate}
            >
              =
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;