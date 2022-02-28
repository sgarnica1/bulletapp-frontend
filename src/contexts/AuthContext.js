import { createContext, useContext, useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
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

  const loginUser = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/token/", {
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
      console.log(data);
    } else {
      alert("error");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
