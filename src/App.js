import React from "react";
import { updateAthletes } from "./utils/utils";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: athletes } = useFetch(
    "http://localhost:8000/athletes",
    updateAthletes
  );

  return (
    <div className="App">
      <h2>Bullet App</h2>

      {athletes &&
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
        ))}
    </div>
  );
}

export default App;
