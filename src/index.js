import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DashboardProvider } from "./contexts/DashboardContext";
import { AthletesProvider } from "./contexts/AthletesContext";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DashboardProvider>
        <AthletesProvider>
          <App />
        </AthletesProvider>
      </DashboardProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
