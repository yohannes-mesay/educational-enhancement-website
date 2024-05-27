import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResourceProvider } from "./contexts/ResourceContext.jsx";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </React.StrictMode>
  </Router>
);
