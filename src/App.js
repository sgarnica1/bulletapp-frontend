import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Navbar />
        <Header />
        <Home />
      </Dashboard>
    </div>
  );
}

export default App;
