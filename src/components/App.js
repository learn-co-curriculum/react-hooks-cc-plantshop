import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import PlantPage from "./PlantPage";

function HomePage() {
  return (
    <div>
      <h2>Welcome to Plantsy</h2>
      <p>Your favorite plant shop!</p>
      <Link to="/plants">
        <button>Go to Plants</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<PlantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

