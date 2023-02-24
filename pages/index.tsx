import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BMIChart from "./BMIChart";

export default function Home() {
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bmi, setBMI] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      alert("Please enter both height and weight!");
      return;
    }
    const h = parseFloat(String(height)) / 100;
    const w = parseFloat(String(weight));
    const result = w / (h * h);
    setBMI(parseFloat(result.toFixed(2)));
  };


  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBMI(null);
  };

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <img src="https://media.discordapp.net/attachments/877116397153554484/1078720804029739018/logo.png" alt="DeLaViaTH logo" style={{ height: "3.5rem", marginRight: "2.5rem" }} />
        <h1 className="mb-4" style={{ marginBottom: 0 }}>BMI Calculator</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="height" className="form-label">Height (cm)</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={height === "" ? "" : +height}
          onChange={(e) => setHeight(e.target.value === "" ? "" : +e.target.value)}
        />

      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">Weight (kg)</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={weight === "" ? "" : +weight}
          onChange={(e) => setWeight(e.target.value === "" ? "" : +e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary me-3"
        onClick={calculateBMI}
      >
        Calculate
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={resetForm}
      >
        Reset
      </button>
      {bmi !== null && (
        <div className="mt-3">
          <h2>Your BMI is {bmi}</h2>
          {bmi < 18.5 && <p>You are underweight</p>}
          {bmi >= 18.5 && bmi < 25 && <p>You are normal weight</p>}
          {bmi >= 25 && bmi < 30 && <p>You are overweight</p>}
          {bmi >= 30 && <p>You are obese</p>}
        </div>
      )}

      <BMIChart />
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <p style={{ marginBottom: "0.5rem" }}>BMI Calculator by <a href="https://github.com/DeLaViaTH"
          target="_blank" rel="noopener noreferrer">
          <img src="https://media.discordapp.net/attachments/877116397153554484/1078720804029739018/logo.png" alt="DeLaViaTH Logo" style={{ height: "90px", width: "auto" }} />
        </a>
        </p>
      </div>
    </div>
  );
}
