import { useDashboard } from "../../contexts/DashboardContext";
import { Link } from "react-router-dom";
import { Navitem } from "./utils/Navitem";
import { Dropdown } from "./utils/Dropdown";
import { DropdownElement } from "./utils/DropdownElement";
import "./navbar.scss";

function Navbar() {
  const { showNav, setShowNav } = useDashboard();

  return (
    <aside className={`Navbar ${showNav && "show"}`}>
      <button className="Navbar__close-btn" onClick={() => setShowNav(false)}>
        <span></span>
      </button>
      <nav className="Navbar__container">
        <Link to={"/"} className="Navbar__logo">
          <img
            src="https://images.bulletcrossfit.com/img/logo_white_resized.png"
            alt="Logo Bullet CrossFit"
          />
        </Link>
        <div className="Navbar__content">
          <ul className="Navbar__navlist">
            <Navitem title={"Escritorio"} path={"/"} />
            <Dropdown>
              <DropdownElement
                title={"Juriquilla"}
                path={"/sucursal/juriquilla"}
              />
              <DropdownElement title={"Zibatá"} path={"/sucursal/zibata"} />
              <DropdownElement
                title={"Grand Juriquilla"}
                path={"/sucursal/grand-juriquilla"}
              />
            </Dropdown>
            <Navitem title={"Pagos"} path={"/pagos"} />
            <Navitem title={"Atletas"} path={"/atletas"} />
            <Navitem title={"Clases"} path={"/clases"} />
            <Navitem title={"Planes"} path={"/planes"} />

            <h4 className="Navbar__subtitle">Recursos</h4>
            <Navitem title={"Programación"} path={"/programacion"} />
            <Navitem title={"Videos"} path={"/videos"} />

            <h4 className="Navbar__subtitle">Cuenta</h4>
            <Navitem title={"Ajustes"} path={"/ajustes"} />
            <Navitem title={"Salir"} path={"/salir"} />
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export { Navbar };
