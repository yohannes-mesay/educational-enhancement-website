import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResourceProvider } from "./contexts/ResourceContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { DiscussionProvider } from "./contexts/DiscussionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DiscussionProvider>
    <Router>
      <React.StrictMode>
        <ResourceProvider>
          <App />
        </ResourceProvider>
      </React.StrictMode>
    </Router>
    </DiscussionProvider>
  </AuthProvider>
);
