import { Datepicker } from "../../../../components/Datepicker/Datepicker";
import "./banner.scss";

function Banner({ children, user }) {
  return (
    <main className="Banner">
      <section className="Banner__content">
        <div className="Banner__welcome">
          <h1 className="Banner__user">Bienvenido, {user}</h1>
          <h2 className="Banner__title">Resumen mensual</h2>
        </div>
        <div className="Banner__filters">
          <Datepicker />
        </div>
      </section>
      <section className="Banner__stats">{children}</section>
    </main>
  );
}

export { Banner };
