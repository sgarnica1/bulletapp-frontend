import { useState } from "react";
import "./header.scss";

function Header({ setShowNav, user, location }) {
  const [showDropdown, setShowDropdown] = useState(false);

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
                <span>S</span>
              </div>
              <div className="Header__user-info Header__dropdown">
                <button
                  className="dropdown__toggle"
                  type="button"
                  onClick={() => setShowDropdown((prevState) => !prevState)}
                >
                  {user}
                  <span className="dropdown__toggle-icon"></span>
                </button>
                <ul className={`dropdown__content ${showDropdown && "show"}`}>
                  <li>
                    <a className="dropdown__item" href="/">
                      Ajustes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown__item" href="/">
                      Salir
                    </a>
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
