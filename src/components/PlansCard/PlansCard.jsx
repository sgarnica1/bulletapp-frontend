import "./plans-card.scss";

function PlansCard({ title, price, subscriptions }) {
  return (
    <article className="PlansCard">
      <div className="PlansCard__header">
        <h5 className="PlansCard__header-title">{title}</h5>
      </div>
      <div className="PlansCard__body">
        <p className="PlansCard__price">{price}</p>
      </div>
      <div className="PlansCard__footer">
        <h4 className="PlansCard__footer-title">Atletas inscritos</h4>
        <span className="PlansCard__footer-stats">{subscriptions}</span>
      </div>
    </article>
  );
}

export { PlansCard };
