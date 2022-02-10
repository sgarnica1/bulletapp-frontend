import { formatCurrency } from "../../utils/utils";
import { useAthletes } from "../../contexts/AthletesContext";
import { useDashboard } from "../../contexts/DashboardContext";
import { Banner } from "./components/Banner/Banner";
import { StatCard } from "./components/StatCard/StatCard";
import { LoadingStatCard } from "./components/StatCard/LoadingStatCard";
import { AthletesChart } from "./components/AthletesChart/AthletesChart";
import { AthletesChartElement } from "./components/AthletesChart/AthletesChartElement";
import { LoadingAthletesChartElement } from "./components/AthletesChart/LoadingAthletesChartElement";
import "./home.scss";

function Home() {
  const { currentUser: user } = useDashboard();

  const { athletes, loadingAthletes, payments, loadingPayments, amount } =
    useAthletes();

  return (
    <div className="Home">
      <Banner user={user}>
        {loadingPayments &&
          new Array(3)
            .fill()
            .map((item, index) => <LoadingStatCard key={index} />)}

        {!loadingPayments && (
          <>
            <StatCard
              title={"Ingresos mensuales"}
              data={formatCurrency(amount)}
              route={"/pagos"}
            />
            <StatCard
              title={"Pagos totales"}
              data={payments.length}
              route={"/pagos"}
            />
            <StatCard
              title={"Atletas inscritos"}
              data={athletes.length}
              route={"/atletas"}
            />
          </>
        )}
      </Banner>

      <section className="AthletesReview">
        <AthletesChart
          title={"Pagos realizados"}
          route={"/pagos"}
          header={"Pagos"}
        >
          {loadingPayments &&
            new Array(5)
              .fill()
              .map((item, index) => (
                <LoadingAthletesChartElement key={index} />
              ))}
          {!loadingPayments &&
            payments.map((payment) => (
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
          {loadingAthletes &&
            new Array(5)
              .fill()
              .map((item, index) => (
                <LoadingAthletesChartElement key={index} />
              ))}
          {!loadingAthletes &&
            athletes.map((athlete) => (
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
