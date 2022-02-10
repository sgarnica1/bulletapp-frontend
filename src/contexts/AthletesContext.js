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

  const amount = payments.reduce(
    (total, payment) => total + parseFloat(payment.quantity),
    0
  );

  return (
    <AthletesContext.Provider
      value={{
        athletes,
        loadingAthletes,
        errorAthletes,
        payments,
        loadingPayments,
        errorPayments,
        amount,
      }}
    >
      {children}
    </AthletesContext.Provider>
  );
}

export { useAthletes, AthletesProvider };
