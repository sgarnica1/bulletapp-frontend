import "./athletes-list.scss";

function AthletesList({ children, title, route, header }) {
  return (
    <article className="AthletesList">
      <div className="AthletesList__header">
        <h3 className="AthletesList__header-title">{title}</h3>
        <a href={route} className="AthletesList__header-button">
          <span className="header-button-text">Ver todo</span>
          <span className="header-button-icon"></span>
        </a>
      </div>

      <div className="AthletesList__list">
        {header && (
          <div className="AthletesList__headers">
            <p className="AthletesList__headers-title">Atletas</p>
            <p className="AthletesList__headers-title">Fecha</p>
            <p className="AthletesList__headers-title">Plan</p>
            <p className="AthletesList__headers-title">{header}</p>
          </div>
        )}
        {children}
      </div>
    </article>
  );
}

export { AthletesList };
