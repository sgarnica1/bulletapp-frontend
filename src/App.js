import { useState } from "react";
// import { updateAthletes } from "./utils/utils";
// import { useFetch } from "./hooks/useFetch";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Home } from "./pages/Home/Home";

function App() {
  const [showNav, setShowNav] = useState(false);

  // const { data: athletes } = useFetch(
  //   "http://localhost:8000/athletes",
  //   updateAthletes
  // );

  return (
    <div className="App">
      <Dashboard>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Home />
      </Dashboard>

      {/* {athletes &&
        athletes.map((athlete) => (
          <div key={athlete.id}>
            <h2>
              {athlete.first_name} {athlete.last_name}
            </h2>
            <p>{athlete.email}</p>
            <p>{athlete.phone_number}</p>
            <p>{athlete.plan}</p>
            <p>{athlete.schedule}</p>
          </div>
        ))} */}
    </div>
  );
}

export default App;
