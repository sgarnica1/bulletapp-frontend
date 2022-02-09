import "./statcard.scss";

function StatCard({ title, data, route }) {
  return (
    <a className="StatCard" href={route}>
      <div className="StatCard__info">
        <p className="StatCard__title">{title}</p>
        <span className="StatCard__number">{data}</span>
      </div>
      <div className="StatCard__button">
        <span></span>
      </div>
    </a>
  );
}

export { StatCard };
