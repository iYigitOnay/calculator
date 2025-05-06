import "./Calculator.css";

const Calculator = () => {
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
            name="number1"
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
            name="number2"
          />
        </div>
        <button className="form-button">Add</button>
        <div className="form-grup">
          <label className="form-label" htmlFor="result">
            Result:
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            name="Result"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
