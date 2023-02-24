import React from "react";

const BMIChart = () => {
  return (
    <div className="mt-5">
      <h2>BMI Chart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>BMI</th>
            <th>Weight Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal weight</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30.0 and Above</td>
            <td>Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BMIChart;
