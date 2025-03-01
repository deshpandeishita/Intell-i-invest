import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend, BarChart, Bar } from "recharts";
import { io } from "socket.io-client";
import '../assets/Dashboards.css';

const socket = io("http://localhost:8000");

const COLORS = ["#00C49F", "#FF8042"];

const fakeData = [
  { sentiment: 0.5, price: 1500, time: "10:00 AM", risk: 30 },
  { sentiment: -0.3, price: 1400, time: "10:30 AM", risk: 70 },
  { sentiment: 0.7, price: 1550, time: "11:00 AM", risk: 20 },
  { sentiment: -0.1, price: 1450, time: "11:30 AM", risk: 60 },
  { sentiment: 0.2, price: 1520, time: "12:00 PM", risk: 40 },
];

const heatmapData = [
  { stock: "AAPL", sentiment: 0.9 },
  { stock: "GOOGL", sentiment: -0.4 },
  { stock: "AMZN", sentiment: 0.7 },
  { stock: "MSFT", sentiment: -0.2 },
  { stock: "TSLA", sentiment: 0.8 },
];

const App = () => {
  const [data, setData] = useState(fakeData);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const positive = fakeData.filter((d) => d.sentiment > 0).length;
    const negative = fakeData.filter((d) => d.sentiment <= 0).length;

    setPieData([
      { name: "Increase", value: positive },
      { name: "Decrease", value: negative },
    ]);
  }, []);

  return (
    <div className="p-10 grid grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl mb-5">Google Stock Sentiment Tracker</h1>
        <p className="mb-5">This dashboard visualizes the sentiment score of Google stock over time and the distribution of positive and negative sentiments.</p>

        <h2 className="text-xl mb-3">Sentiment Score Over Time</h2>
        <LineChart width={700} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: "Time", position: "insideBottomRight", offset: 0 }} />
          <YAxis yAxisId="left" label={{ value: "Sentiment Score", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Stock Price", angle: 90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="sentiment" stroke="#8884d8" name="Sentiment Score" />
          <Line yAxisId="right" type="monotone" dataKey="price" stroke="#82ca9d" name="Stock Price" />
        </LineChart>

        <h2 className="text-xl mt-10 mb-3">Sentiment Distribution</h2>
        <PieChart width={400} height={400} className="mt-10">
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>

        <h2 className="text-xl mt-10 mb-3">Risk Level Visualization</h2>
        <BarChart width={700} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="risk" fill="maroon" name="Risk Level" />
        </BarChart>
      </div>
      <div>
        <h2 className="text-xl mb-3">Top Gainers/Losers Sentiment Heatmap</h2>
        {heatmapData.map((entry, index) => (
          <div key={index} className={`p-3 mb-2 text-white ${entry.sentiment > 0 ? "bg-green-500" : "bg-red-500"}`}>{entry.stock}: {entry.sentiment > 0 ? "+" : ""}{entry.sentiment}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
