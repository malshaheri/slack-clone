import React from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";

function App() {
  return (
    <div className="app">
     <Header />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
