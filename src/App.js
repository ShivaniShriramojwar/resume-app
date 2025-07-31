// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import GeneratePDF from "./component/GeneratePDF";
import Practice from "./component/Practice"; // Import the new Practice component
import CoverLetter from "./component/CoverLetter";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneratePDF />} />
        <Route path="/practice" element={<Practice />} /> {/* New route */}
        <Route path="/cover-letter" element={<CoverLetter />} />{" "}
        {/* New route */}
      </Routes>
    </div>
  );
};

export default App;
