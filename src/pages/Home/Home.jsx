import {
  updateAthletes,
  updatePayments,
  formatCurrency,
} from "../../utils/utils";
import { useFetch } from "../../hooks/useFetch";
import { Banner } from "./components/Banner/Banner";
import { StatCard } from "./components/StatCard/StatCard";
import { AthletesChart } from "./components/AthletesChart/AthletesChart";
import { AthletesChartElement } from "./components/AthletesChart/AthletesChartElement";
import "./home.scss";

function Home({ user }) {
  const { data: athletes } = useFetch(
    "http://localhost:8000/athletes",
    updateAthletes
  );

  const { data: payments } = useFetch(
    "http://localhost:8000/payments",
    updatePayments
  );

  const amount = payments.reduce(
    (total, payment) => total + parseFloat(payment.quantity),
    0
  );

  return (
    <div className="Home">
      <Banner user={user}>
        <StatCard title={"Ingresos mensuales"} data={formatCurrency(amount)} />
        <StatCard title={"Pagos totales"} data={payments.length} />
        <StatCard title={"Atletas inscritos"} data={athletes.length} route={"/atletas"}/>
      </Banner>

      <section className="AthletesReview">
        <AthletesChart
          title={"Pagos realizados"}
          route={"/pagos"}
          header={"Pagos"}
        >
          {payments.map((payment) => (
            <AthletesChartElement
              key={payment.id}
              name={payment.athlete}
              date={payment.date}
              plan={payment.plan}
              params={formatCurrency(payment.quantity)}
            />
          ))}
        </AthletesChart>

        <AthletesChart
          title={"Inscripciones recientes"}
          route={"/atletas"}
          header={"Clase"}
        >
          {athletes.map((athlete) => (
            <AthletesChartElement
              key={athlete.id}
              name={`${athlete.first_name} ${athlete.last_name}`}
              date={athlete.created}
              plan={athlete.plan}
              params={athlete.schedule}
            />
          ))}
        </AthletesChart>
      </section>
    </div>
  );
}

export { Home };
