import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";
import { Athletes } from "./pages/Athletes/Athletes";
import { AddAthlete } from "./pages/AddAthlete/AddAthlete";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atletas" element={<Athletes />} />
            <Route path="/atletas/nuevo" element={<AddAthlete />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Dashboard>
      </div>
    </Router>
  );
}

export default App;
