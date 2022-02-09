import "./athletes-chart.scss";

function AthletesChart({ children, title, route, header }) {
  return (
    <article className="AthletesChart">
      <div className="AthletesChart__header">
        <h3 className="AthletesChart__header-title">{title}</h3>
        <a href={route} className="AthletesChart__header-button">
          <span className="header-button-text">Ver todo</span>
          <span className="header-button-icon"></span>
        </a>
      </div>

      <div className="AthletesChart__list">
        {header && (
          <div className="AthletesChart__headers">
            <p className="AthletesChart__headers-title">Atletas</p>
            <p className="AthletesChart__headers-title">Fecha</p>
            <p className="AthletesChart__headers-title">Plan</p>
            <p className="AthletesChart__headers-title">{header}</p>
          </div>
        )}
        {children}
      </div>
    </article>
  );
}

export { AthletesChart };
