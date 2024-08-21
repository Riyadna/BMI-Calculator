import { useState } from "react";
import "./App.css";
import bmiImage from "./assets/bmi.jpg";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmistatus("Under Weight");
      } else if (bmiValue > 18.5 && bmiValue < 24.9) {
        setBmistatus("Normal Weight");
      } else if (bmiValue > 25 && bmiValue < 29.9) {
        setBmistatus("Over Weight");
      } else {
        setBmistatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmistatus("");
      setErrorMessage(
        "Please enter valid numeric values for height and weight"
      );
    }
  };

  const clearAll = () => {
    setBmi(null);
    setBmistatus("");
    setHeight("");
    setWeight("");
  };

  return (
    <>
      <div className="container">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          <p className="alert">{errorMessage}</p>
          <div className="input-container">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              id="height"
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
            />
          </div>
          <div className="click">
            <button className="calculate" onClick={calculateBmi}>
              Calculate BMI
            </button>
            <button className="clear" onClick={clearAll}>
              Clear
            </button>
          </div>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
