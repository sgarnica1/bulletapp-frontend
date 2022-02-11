import React from "react";
import { useFetch } from "../hooks/useFetch";
import { updateAthletes, updatePayments } from "../utils/utils";

const AthletesContext = React.createContext();

function useAthletes() {
  return React.useContext(AthletesContext);
}

function AthletesProvider({ children }) {
  const {
    data: athletes,
    loading: loadingAthletes,
    error: errorAthletes,
  } = useFetch("http://localhost:8000/athletes", updateAthletes);

  const {
    data: payments,
    loading: loadingPayments,
    error: errorPayments,
  } = useFetch("http://localhost:8000/payments", updatePayments);

  const {
    data: plans,
    loading: loadingPlans,
    error: errorPlans,
  } = useFetch("http://localhost:8000/plans");

  const totalPaymentsAmount = payments.reduce(
    (total, payment) => total + parseFloat(payment.quantity),
    0
  );

  const athletesData = { athletes, loadingAthletes, errorAthletes };
  const paymentsData = {
    payments,
    loadingPayments,
    errorPayments,
    totalPaymentsAmount,
  };
  const plansData = { plans, loadingPlans, errorPlans };

  return (
    <AthletesContext.Provider
      value={{
        athletesData,
        paymentsData,
        plansData,
      }}
    >
      {children}
    </AthletesContext.Provider>
  );
}

export { useAthletes, AthletesProvider };
