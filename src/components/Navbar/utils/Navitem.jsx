import { Link } from "react-router-dom";
import { useDashboard } from "../../../contexts/DashboardContext";

function Navitem({ title, path }) {
  const { activeView, setActiveView } = useDashboard();

  return (
    <li
      className={`Navbar__navitem ${activeView === title && "active"}`}
      onClick={() => setActiveView(title)}
    >
      <Link to={path} className="Navbar__navlink">
        {title}
      </Link>
    </li>
  );
}

export { Navitem };
