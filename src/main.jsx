import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResourceProvider } from "./contexts/ResourceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResourceProvider>
      <App />
    </ResourceProvider>
  </React.StrictMode>
);
