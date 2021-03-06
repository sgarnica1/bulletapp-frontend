import { createContext, useContext, useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/requests";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const tokensExist = localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null;

  const userExist = localStorage.getItem("authTokens")
    ? jwt_decode(localStorage.getItem("authTokens"))
    : null;

  const [authTokens, setAuthTokens] = useState(tokensExist);
  const [user, setUser] = useState(userExist);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingInAsGuest, setLoggingInAsGuest] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();
    setLoggingIn(true);

    try {
      const res = await fetch(API_BASE_URL + "/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setLoggingIn(false);
      } else {
        setErrorMessage(data.detail);
        setLoggingIn(false);
      }
    } catch (err) {
      setErrorMessage("Error connecting to server");
      setLoggingIn(false);
    }
  };

  const loginAsGuest = async (event) => {
    event.preventDefault();
    setLoggingInAsGuest(true);

    try {
      const res = await fetch(API_BASE_URL + "/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "invitado",
          password: "bulletC123!",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setLoggingInAsGuest(false);
      } else {
        setErrorMessage(data.detail);
      }
    } catch (err) {
      setErrorMessage("Error connecting to server");
    }
  };

  const logoutUser = (callback) => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    if (callback) callback();
  };

  const updateToken = async () => {
    try {
      const res = await fetch(API_BASE_URL + "/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      });
      const data = await res.json();

      if (res.ok) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
        logoutUser();
      }
    } catch (err) {
      logoutUser();
      console.log(err);
    }

    if (loading) setLoading(false);
  };

  useEffect(() => {
    if (loading) updateToken();

    const fourMinutes = 1000 * 60 * 4;
    const interval = setInterval(() => {
      if (authTokens) updateToken();
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authTokens,
        loggingIn,
        loggingInAsGuest,
        errorMessage,
        loginUser,
        logoutUser,
        loginAsGuest,
        setErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
