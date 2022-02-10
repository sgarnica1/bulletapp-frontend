import React from "react";

const DashboardContext = React.createContext();

function useDashboard() {
  return React.useContext(DashboardContext);
}

function DashboardProvider({ children }) {
  const [showNav, setShowNav] = React.useState(false);
  const [currentUser] = React.useState("Sergio");
  const [currentLocation] = React.useState("Juriquilla");
  
  return (
    <DashboardContext.Provider
      value={{showNav, currentUser, currentLocation, setShowNav}}
    >{children}</DashboardContext.Provider>
  )
}

export { useDashboard, DashboardProvider };
