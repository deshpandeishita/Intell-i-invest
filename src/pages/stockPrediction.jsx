import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/stock.css"; // Ensure this CSS file exists

export default function Dashboard() {
  const location = useLocation();
  const stockSymbol = location.state?.sentimentData || {
    stockInput: "Unknown",
    prediction: "No data available",
  };

  // Determine background image based on prediction
  const getBackgroundClass = () => {
    if (stockSymbol.prediction.toLowerCase().includes("increase")) {
      return "stock-up-bg";
    } else if (stockSymbol.prediction.toLowerCase().includes("plummet")) {
      return "stock-down-bg";
    }
    return "stock-neutral-bg";
  };

  return (
    <div className={`dashboard-container ${getBackgroundClass()}`}>
      <div className="dashboard-header">
        <h1>Investment Insights</h1>
      </div>

      <div className="dashboard-content">
        <div className="stock-card">
          <h2>{stockSymbol.stockInput}</h2>
          <table className="stock-table">
            <tbody>
              <tr>
                <td className="label">Stock Name:</td>
                <td>{stockSymbol.stockInput}</td>
              </tr>
              <tr>
                <td className="label">Prediction:</td>
                <td className="prediction-text">{stockSymbol.prediction}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
