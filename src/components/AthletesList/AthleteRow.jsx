import { useAthletes } from "../../hooks/useAthletes";

function AthleteRow({ id, name, date, plan, params, onRefetch }) {
  const { actions } = useAthletes();

  return (
    <div className="AthletesList__athlete">
      <div className="AthletesList__athlete-name-container">
        <p className="AthletesList__athlete-field">{name}</p>
      </div>
      <p className="AthletesList__athlete-field">{date}</p>
      <p className="AthletesList__athlete-field">{plan}</p>
      <p className="AthletesList__athlete-field">{params}</p>
      <button
        className="AthletesList__athlete-field AthletesList__athlete-field--delete"
        onClick={() => {
          actions.deleteAthlete(id, onRefetch);
        }}
      >
        Elimiar
      </button>
    </div>
  );
}

export { AthleteRow };
