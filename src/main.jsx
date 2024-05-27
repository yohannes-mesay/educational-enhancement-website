import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResourceProvider } from "./contexts/ResourceContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <ResourceProvider>
          <App />
        </ResourceProvider>
      </React.StrictMode>
    </Router>
  </AuthProvider>
);
