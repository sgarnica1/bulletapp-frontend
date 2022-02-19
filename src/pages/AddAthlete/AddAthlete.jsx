// import { useAthletes } from "../../contexts/AthletesContext";
// import { useDashboard } from "../../contexts/DashboardContext";
// import { useNavigate } from "react-router-dom";

// Components
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { Banner } from "../../components/Banner/Banner";
import { AddAthleteForm } from "../../components/AddAthleteForm/AddAthleteForm";

import "./addathlete.scss";

function AddAthlete() {

  return (
    <div className="AddAthlete">
      <Banner title={"Añadir Atletas"} description={"Agrega un nuevo atleta"} />
      <ContentContainer>
        <AddAthleteForm />
      </ContentContainer>
    </div>
  );
}

export { AddAthlete };
