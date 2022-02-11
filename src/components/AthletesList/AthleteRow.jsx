function AthleteRow({ name, date, plan, params }) {
  return (
    <div className="AthletesList__athlete">
      <div className="AthletesList__athlete-name-container">
        <p className="AthletesList__athlete-field">{name}</p>
      </div>
      <p className="AthletesList__athlete-field">{date}</p>
      <p className="AthletesList__athlete-field">{plan}</p>
      <p className="AthletesList__athlete-field">{params}</p>
    </div>
  );
}

export { AthleteRow };
