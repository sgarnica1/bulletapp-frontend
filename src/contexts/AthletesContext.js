import React from "react";
import { useFetch } from "../hooks/useFetch";
import { updateAthletes, updatePayments } from "../utils/utils";

const AthletesContext = React.createContext();

function useAthletes() {
  return React.useContext(AthletesContext);
}

function AthletesProvider({ children }) {
  const apiUrl = "https://sgarn.pythonanywhere.com";

  const {
    data: athletes,
    loading: loadingAthletes,
    error: errorAthletes,
  } = useFetch(`${apiUrl}/athletes`, updateAthletes);

  const {
    data: payments,
    loading: loadingPayments,
    error: errorPayments,
  } = useFetch(`${apiUrl}/payments`, updatePayments);

  const {
    data: plans,
    loading: loadingPlans,
    error: errorPlans,
  } = useFetch(`${apiUrl}/plans`);

  const {
    data: schedules,
    loading: loadingSchedules,
    error: errorSchedules,
  } = useFetch(`${apiUrl}/schedule`);

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
  const schedulesData = { schedules, loadingSchedules, errorSchedules };

  // FUNCTIONS

  function addData(endpoint, data, callback) {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw Error();
        return res.json();
      })
      .then(() => callback())
      .catch((err) => console.log(err));
  }

  function deleteData(endpoint, callback) {
    fetch(endpoint, {
      method: "DELETE",
    })
      // .then((res) => {
      //   if (!res.ok) throw Error();
      //   return res.json();
      // })
      .then(() => callback())
      // .catch((err) => console.log(err));
  }

  const actions = { addData, deleteData };

  return (
    <AthletesContext.Provider
      value={{
        apiUrl,
        athletesData,
        paymentsData,
        plansData,
        schedulesData,
        actions,
      }}
    >
      {children}
    </AthletesContext.Provider>
  );
}

export { useAthletes, AthletesProvider };
