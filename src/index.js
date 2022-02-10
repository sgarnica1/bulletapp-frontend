import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DashboardProvider } from "./contexts/DashboardContext";
import { AthletesProvider } from "./contexts/AthletesContext";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <DashboardProvider>
      <AthletesProvider>
        <App />
      </AthletesProvider>
    </DashboardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
