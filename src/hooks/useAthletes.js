import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  getAthletesApi,
  addAthleteApi,
  getAthletesByPlanApi,
  deleteAthleteApi,
} from "../api/athletes";

const useAthletes = () => {
  const [athletes, setAthletes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { authTokens, logoutUser } = useAuth();

  const getAthletes = async () => {
    try {
      setLoading(true);
      const res = await getAthletesApi(authTokens.access, logoutUser);
      setAthletes(res);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addAthlete = async (data, callback) => {
    try {
      setLoading(true);
      await addAthleteApi(data, authTokens.access, callback);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const getAthletesByPlan = async (id) => {
    try {
      setLoading(true);
      const res = await getAthletesByPlanApi(authTokens.access, logoutUser, id);
      setAthletes(res);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteAthlete = async (id, callback) => {
    try {
      setLoading(true);
      await deleteAthleteApi(authTokens.access, callback, id);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const actions = { getAthletes, addAthlete, deleteAthlete, getAthletesByPlan };

  return { athletes, loading, error, actions };
};

export { useAthletes };