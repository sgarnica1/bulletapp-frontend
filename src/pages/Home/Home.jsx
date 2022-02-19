import { useAthletes } from "../../contexts/AthletesContext";
import { useDashboard } from "../../contexts/DashboardContext";
import { formatCurrency } from "../../utils/utils";

// Components
import { HomeBanner } from "./components/HomeBanner/HomeBanner";
import { StatCard } from "./components/StatCard/StatCard";
import { LoadingStatCard } from "./components/StatCard/LoadingStatCard";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { AthletesList } from "../../components/AthletesList/AthletesList";
import { AthleteRow } from "../../components/AthletesList/AthleteRow";
import { CardsList } from "../../components/CardsList/CardsList";
import { PlansCard } from "../../components/PlansCard/PlansCard";
import { LoadingPlansCard } from "../../components/PlansCard/LoadingPlansCard";
import { ToolsCard } from "../../components/ToolsCard/ToolsCard";
import { ErrorBanner } from "../../components/ErrorBanner/ErrorBanner";

function Home() {
  const { currentUser: user } = useDashboard();
  const { athletesData, paymentsData, plansData } = useAthletes();

  const { athletes, loadingAthletes, errorAthletes } = athletesData;
  const { payments, loadingPayments, errorPayments, totalPaymentsAmount } =
    paymentsData;
  const { plans, loadingPlans, errorPlans } = plansData;

  return (
    <div className="Home">
      <HomeBanner user={user}>
        {!errorPayments &&
          loadingPayments &&
          new Array(3)
            .fill()
            .map((item, index) => <LoadingStatCard key={index} />)}

        {!errorPayments && !loadingPayments && (
          <>
            <StatCard
              title={"Ingresos mensuales"}
              data={formatCurrency(totalPaymentsAmount)}
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
      </HomeBanner>

      <ContentContainer>
        <AthletesList
          title={"Pagos realizados"}
          route={"/pagos"}
          header={"Pagos"}
          error={errorPayments}
          loading={loadingPayments}
          data={payments}
          activeView={"Pagos"}
          // Render functions
          onError={() => (
            <ErrorBanner description={"Ocurrió un error al cargar los pagos"} />
          )}
          render={(payment) => (
            <AthleteRow
              key={payment.id}
              name={payment.athlete}
              date={payment.date}
              plan={payment.plan}
              params={formatCurrency(payment.quantity)}
            />
          )}
        ></AthletesList>

        <AthletesList
          title={"Inscripciones recientes"}
          route={"/atletas"}
          header={"Clase"}
          error={errorAthletes}
          loading={loadingAthletes}
          data={athletes}
          activeView={"Atletas"}
          // Render functions
          onError={() => (
            <ErrorBanner
              description={
                "Ocurrió un error al cargar la información de los atletas"
              }
            />
          )}
          render={(athlete) => (
            <AthleteRow
              key={athlete.id}
              name={`${athlete.first_name} ${athlete.last_name}`}
              date={athlete.created}
              plan={athlete.plan}
              params={athlete.schedule}
            />
          )}
        ></AthletesList>

        <CardsList title={"Planes"}>
          {errorPlans && (
            <ErrorBanner
              description={"Ocurrió un error al cargar los planes"}
            />
          )}
          {!errorPlans &&
            loadingPlans &&
            new Array(6)
              .fill()
              .map((item, index) => <LoadingPlansCard key={index} />)}
          {!errorPlans &&
            !loadingPlans &&
            plans.map((plan) => (
              <PlansCard
                key={plan.id}
                id={plan.id}
                title={plan.name}
                price={formatCurrency(plan.price)}
              />
            ))}
        </CardsList>
        <CardsList title={"Herramientas"}>
          <ToolsCard
            route={"/herramientas/programacion"}
            title={"Programación"}
            styleClass={"programming"}
          />
          <ToolsCard
            route={"/herramientas/videos"}
            title={"Videos"}
            styleClass={"video"}
          />
        </CardsList>
      </ContentContainer>
    </div>
  );
}

export { Home };
