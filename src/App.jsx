import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen.jsx";
import List from "./pages/List.jsx";
import Dashboards from "./pages/Dashboards.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Dashboards" element={<Dashboards />} />
      </Routes>
    </Router>
  );
};

export default App;
