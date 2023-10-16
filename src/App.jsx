import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
