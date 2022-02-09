import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [currentUser] = useState("Sergio");
  const [currentLocation] = useState("Juriquilla");

  return (
    <div className="App">
      <Dashboard>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Header
          setShowNav={setShowNav}
          user={currentUser}
          location={currentLocation}
        />
        <Home user={currentUser} />
      </Dashboard>
    </div>
  );
}

export default App;
