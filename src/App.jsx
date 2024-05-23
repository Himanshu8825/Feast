import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home,  Success } from "./Index";

const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
