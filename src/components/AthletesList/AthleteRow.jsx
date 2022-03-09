import { useAthletes } from "../../hooks/useAthletes";
import { Link } from "react-router-dom";

function AthleteRow({ id, name, date, plan, params, onRefetch }) {
  const { actions } = useAthletes();

  return (
    <Link to={`/atletas/${id}`} className="AthletesList__athlete">
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
    </Link>
  );
}

export { AthleteRow };
