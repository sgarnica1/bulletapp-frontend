import { Link } from "react-router-dom";
import { useDashboard } from "../../../contexts/DashboardContext";

function DropdownElement({ title, active, path }) {
  const { currentLocation, setCurrentLocation } = useDashboard();

  return (
    <li
      className={`navdropdown__element ${currentLocation === title && "active"}`}
      onClick={() => setCurrentLocation(title)}
    >
      <Link to={path}>{title}</Link>
    </li>
  );
}

export { DropdownElement };
