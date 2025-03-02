import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboards = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState([]);
  const [suspiciousActivity, setSuspiciousActivity] = useState([]);
  const [riskSummary, setRiskSummary] = useState("");
  const [finalVerdict, setFinalVerdict] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/predictStock?stock=${symbol}`);
        console.log("Fetched Stock Data:", response.data);

        if (!response.data.priceHistory.length) {
          console.error("No stock data available");
          return;
        }

        setStockData(response.data.riskAnalysis.slice(-20));
        const flaggedActivities = [];
        let highRiskCount = 0;
        let extremeRiskCount = 0;

        response.data.riskAnalysis.forEach((d, i, arr) => {
          if (i === 0) return;
          const prevRisk = arr[i - 1].risk;
          if (d.risk > 80 || Math.abs(d.risk - prevRisk) > 30) {
            flaggedActivities.push({
              time: d.time,
              message: `⚠️ Suspicious Risk at ${new Date(d.time).toLocaleTimeString()} - Risk Level: ${d.risk}`,
            });
            extremeRiskCount++;
          }
          if (d.risk > 50) highRiskCount++;
        });

        setSuspiciousActivity(flaggedActivities);
        const totalEntries = response.data.riskAnalysis.length;
        const riskPercentage = (highRiskCount / totalEntries) * 100;
        const extremeRiskPercentage = (extremeRiskCount / totalEntries) * 100;

        if (extremeRiskPercentage > 40) {
          setRiskSummary("🚨 HIGH RISK: This stock has frequent and extreme risk fluctuations.");
          setFinalVerdict("🚨 SUSPICIOUS COMPANY: Frequent high-risk fluctuations detected.");
        } else if (riskPercentage > 50) {
          setRiskSummary("⚠️ MEDIUM RISK: Moderate risk fluctuations detected.");
          setFinalVerdict("⚠️ CAUTION: Some risk patterns suggest instability.");
        } else {
          setRiskSummary("✅ LOW RISK: No major risk fluctuations detected.");
          setFinalVerdict("✅ SAFE COMPANY: No major suspicious activity detected.");
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    if (symbol) fetchData();
  }, [symbol]);

  return (
    <div className="min-h-screen p-10" style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="header">
        <div className="logo" onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}></div>
        <span className="logo-text" onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}>
          Intell-I-Invest
        </span>
        <nav>
          <span onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}>Home</span>
          <span onClick={() => scrollToSection(aboutRef)} style={{ cursor: "pointer" }}>About Us</span>
          <span onClick={() => scrollToSection(rangeRef)} style={{ cursor: "pointer" }}>Our Range</span>
          
        </nav>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">📊 Stock Risk Analysis - {symbol}</h1>
        <p className="text-center text-gray-600 mb-6">Analyzing potential suspicious activity in {symbol} stock.</p>

        <div className="bg-blue-100 p-4 rounded-lg border-l-8 border-blue-500 shadow-md">
          <h2 className="text-xl font-semibold text-blue-800">📌 Risk Assessment Summary</h2>
          <p className="mt-2 text-lg font-medium">{riskSummary}</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-8">🕵️ Suspicious Activity Detected</h2>
        {suspiciousActivity.length > 0 ? (
          <ul className="bg-red-100 p-4 mt-2 rounded-lg border-l-8 border-red-500 shadow-md">
            {suspiciousActivity.map((item, index) => (
              <li key={index} className="text-red-700">{item.message}</li>
            ))}
          </ul>
        ) : (
          <p className="text-green-700 bg-green-100 p-4 mt-2 rounded-lg border-l-8 border-green-500 shadow-md">✅ No suspicious activity detected.</p>
        )}

        <h2 className="text-xl font-semibold text-gray-800 mt-8">📜 Final Verdict</h2>
        <p className={`p-4 mt-2 text-lg font-bold text-center rounded-lg shadow-md ${
          finalVerdict.includes("SUSPICIOUS") ? "bg-red-500 text-white" :
          finalVerdict.includes("CAUTION") ? "bg-yellow-500 text-black" : "bg-green-500 text-white"
        }`}>{finalVerdict}</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8">📅 Recent Stock Risk Data</h2>
        <ul className="bg-gray-100 p-4 mt-2 rounded-lg shadow-md">
          {stockData.length > 0 ? (
            stockData.map((entry, index) => (
              <li key={index} className="border-b border-gray-300 p-2 text-gray-700">
                🕒 {new Date(entry.time).toLocaleTimeString()} - Risk Level: {entry.risk}
              </li>
            ))
          ) : (
            <p>No stock data available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboards;
