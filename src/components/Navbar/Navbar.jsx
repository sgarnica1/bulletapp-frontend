// import { useState } from "react";
import { Navitem } from "./utils/Navitem";
import { Dropdown } from "./utils/Dropdown";
import { DropdownElement } from "./utils/DropdownElement";
import "./navbar.scss";

function Navbar({ showNav, setShowNav }) {
  function handleClose() {
    setShowNav(false);
  }

  return (
    <aside className={`Navbar ${showNav && "show"}`}>
      <button className="Navbar__close-btn" onClick={handleClose}>
        <span></span>
      </button>
      <nav className="Navbar__container">
        <div className="Navbar__logo">
          <img
            src="https://images.bulletcrossfit.com/img/logo_white_resized.png"
            alt="Logo Bullet CrossFit"
          />
        </div>
        <div className="Navbar__content">
          <ul className="Navbar__navlist">
            <Navitem title={"Escritorio"} active />
            <Dropdown>
              <DropdownElement title={"Juriquilla"} active/>
              <DropdownElement title={"Zibatá"} active={false} />
              <DropdownElement title={"Grand Juriquilla"} active={false} />
            </Dropdown>
            <Navitem title={"Pagos"} />
            <Navitem title={"Atletas"} />
            <Navitem title={"Clases"} />
            <Navitem title={"Planes"} />

            <h4 className="Navbar__subtitle">Recursos</h4>
            <Navitem title={"Programación"} />
            <Navitem title={"Videos"} />

            <h4 className="Navbar__subtitle">Cuenta</h4>
            <Navitem title={"Ajustes"} />
            <Navitem title={"Salir"} />
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export { Navbar };
