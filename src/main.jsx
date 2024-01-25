import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

// Using ReactDOM.createRoot for concurrent mode rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application within HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
