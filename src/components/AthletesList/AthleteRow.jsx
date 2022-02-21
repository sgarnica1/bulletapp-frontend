// import { useAthletes } from "../../contexts/AthletesContext";

function AthleteRow({ name, date, plan, params, id, endpoint }) {
  // const { apiUrl, actions } = useAthletes();
  // const deleteUrl = `${apiUrl}/${endpoint}/${id}`;

  return (
    <div className="AthletesList__athlete">
      <div className="AthletesList__athlete-name-container">
        <p className="AthletesList__athlete-field">{name}</p>
      </div>
      <p className="AthletesList__athlete-field">{date}</p>
      <p className="AthletesList__athlete-field">{plan}</p>
      <p className="AthletesList__athlete-field">{params}</p>
      {/* <button
        className="AthletesList__athlete-field"
        onClick={() => {
          actions.deleteData(deleteUrl);
        }}
      >
        Delete
      </button> */}
    </div>
  );
}

export { AthleteRow };
