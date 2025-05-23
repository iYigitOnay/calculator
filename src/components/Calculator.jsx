import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  return (
    <div className="calculator-container">
      <h1>UseState</h1>
      <div className="form-container">
        <div className="form-grup">
          <label className="form-label" htmlFor="number1">
            Number 1:
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            value={number1}
            onChange={handleNumber1Change}
          />
        </div>
        <div className="form-grup">
          <label className="form-label" htmlFor="number2">
            Number 2:
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            value={number2}
            onChange={handleNumber2Change}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-grup">
          <label className="form-label" htmlFor="result">
            Result:
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={result}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
