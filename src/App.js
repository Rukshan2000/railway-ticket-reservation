import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
  );
}

export default App;
