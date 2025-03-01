import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import List from "./pages/List.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;
