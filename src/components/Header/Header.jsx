import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../contexts/DashboardContext";
import { useAuth } from "../../contexts/AuthContext";
import "./header.scss";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setShowNav, currentLocation: location } = useDashboard();
  const { user, logoutUser } = useAuth();
  const navigation = useNavigate();

  return (
    <header className="Header">
      <nav className="Header__nav">
        <button
          className="Header__toggler"
          onClick={() => setShowNav((prevState) => !prevState)}
        >
          <span className="Header__toggler-icon"></span>
        </button>
        <ul className="Header__nav-container">
          <li className="Header__nav-element current-location">
            <span className="current-location__icon"></span>
            <p className="current-location__text">{location}</p>
          </li>
          <li className="Header__nav-element">
            <div className="Header__user">
              <div className="Header__user-profile">
                <span>
                  {user.first_name
                    ? user.first_name[0]
                    : user.username[0].toUpperCase()}
                </span>
              </div>
              <div className="Header__user-info Header__dropdown">
                <button
                  className="dropdown__toggle"
                  type="button"
                  onClick={() => setShowDropdown((prevState) => !prevState)}
                >
                  {user.first_name
                    ? user.first_name
                    : user.username[0].toUpperCase() + user.username.slice(1)}
                  <span className="dropdown__toggle-icon"></span>
                </button>
                <ul className={`dropdown__content ${showDropdown && "show"}`}>
                  <li>
                    <a className="dropdown__item" href="/">
                      Ajustes
                    </a>
                  </li>
                  <li
                    onClick={() => logoutUser(() => navigation("/login"))}
                    style={{ cursor: "pointer" }}
                  >
                    Salir
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
