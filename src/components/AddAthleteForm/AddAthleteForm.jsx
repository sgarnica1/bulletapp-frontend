import { useState } from "react";
import { useAthletes } from "../../contexts/AthletesContext";
import { useNavigate } from "react-router-dom";
import "./addathlete-form.scss";

function AddAthleteForm() {
  const { apiUrl, athletesData, schedulesData, plansData, actions } =
    useAthletes();
  const { athletes } = athletesData;
  const { schedules } = schedulesData;
  const { plans } = plansData;

  const navigate = useNavigate();

  const [athlete, setAthlete] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    plan: "",
    schedule: "",
    beneficiary: "",
  });

  function updateAthleteInfo(event, attribute, endpoint) {
    setAthlete((athlete) => {
      if (endpoint) {
        athlete[attribute] = endpoint + event.target.value + "/";
      } else {
        athlete[attribute] = event.target.value;
      }
      return athlete;
    });
  }

  return (
    <form
      className="AddAthleteForm"
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(athlete);
        const endpoint = `${apiUrl}/athletes/`;
        actions.addData(endpoint, athlete);
        navigate("/atletas")
      }}
    >
      <div className="AddAthleteForm__input-container">
        <label htmlFor="firstname">Nombre</label>
        <input
          type="text"
          placeholder="Nombre(s)"
          required
          onChange={(event) => updateAthleteInfo(event, "first_name")}
        />
      </div>
      <div className="AddAthleteForm__input-container">
        <label htmlFor="lastname">Apellidos</label>
        <input
          type="text"
          placeholder="Apellidos"
          required
          onChange={(event) => updateAthleteInfo(event, "last_name")}
        />
      </div>
      <div className="AddAthleteForm__input-container">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          placeholder="usuario@correo.com"
          onChange={(event) => updateAthleteInfo(event, "email")}
        />
      </div>
      <div className="AddAthleteForm__input-container">
        <label htmlFor="phoneNumber">Número de teléfono</label>
        <input
          type="number"
          placeholder="Número de teléfono"
          required
          onChange={(event) => updateAthleteInfo(event, "phone_number")}
        />
      </div>
      <div className="AddAthleteForm__input-container">
        <label htmlFor="plan">Plan</label>
        <select
          required
          onChange={(event) =>
            updateAthleteInfo(event, "plan", `${apiUrl}/plans/`)
          }
        >
          <option value="">Selecciona un plan</option>
          {plans &&
            plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
        </select>
      </div>
      <div className="AddAthleteForm__input-container">
        <label htmlFor="group">Clase</label>
        <select
          required
          onChange={(event) =>
            updateAthleteInfo(event, "schedule", `${apiUrl}/schedule/`)
          }
        >
          <option value="">Selecciona una clase</option>
          {schedules &&
            schedules.map((schedule) => (
              <option key={schedule.id} value={schedule.id}>
                {schedule.hour}
              </option>
            ))}
        </select>
      </div>

      <div className="AddAthleteForm__input-container">
        <label htmlFor="group">Beneficiario (opcional)</label>
        <select
          onChange={(event) =>
            updateAthleteInfo(event, "beneficiary", `${apiUrl}/athletes/`)
          }
        >
          <option value="">Selecciona un atleta</option>
          {athletes &&
            athletes.map((athlete) => (
              <option key={athlete.id} value={athlete.id}>
                {athlete.first_name} {athlete.last_name}
              </option>
            ))}
        </select>
      </div>

      <button type="submit" className="AddAthleteForm__submit-btn">
        Añadir Atleta
      </button>
    </form>
  );
}

export { AddAthleteForm };
