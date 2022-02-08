import "./banner.scss";
import { Datepicker } from "../../../../components/Datepicker/Datepicker";
import { StatCard } from "../StatCard/StatCard";

function Banner({ user }) {
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
      <section className="Banner__stats">
        <StatCard title={"Ingresos mensuales"} data={"$50,200.00"}/>
        <StatCard title={"Ingresos productos"} data={"$7,520.00"}/>
        <StatCard title={"Pagos totales"} data={"132"}/>
        <StatCard title={"Atletas inscritos"} data={"157"}/>
      </section>
    </main>
  );
}

export { Banner };
