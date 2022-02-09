function AthletesChartElement({ name, date, plan, params }) {
  return (
    <div className="AthletesChart__athlete">
      <div className="AthletesChart__athlete-name-container">
        <p className="AthletesChart__athlete-field">{name}</p>
      </div>
      <p className="AthletesChart__athlete-field">{date}</p>
      <p className="AthletesChart__athlete-field">{plan}</p>
      <p className="AthletesChart__athlete-field">{params}</p>
    </div>
  );
}

export { AthletesChartElement };
