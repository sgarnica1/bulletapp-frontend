import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAthletes } from "../../hooks/useAthletes";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { AddAthleteForm } from "../../components/AddAthleteForm/AddAthleteForm";
import { Banner } from "../../components/Banner/Banner";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import { ErrorBanner } from "../../components/ErrorBanner/ErrorBanner";

function SingleAthlete() {
  const { athletes: athlete, loading, error, actions } = useAthletes();
  const { id } = useParams();
  useEffect(() => {
    actions.getAthleteById(id);
  }, []);

  return (
    <div className="SingleAthlete">
      <Banner
        title={"Editar Atleta"}
        description={"Edita la información de Sergio"}
      />
      <ContentContainer>
        {error && <ErrorBanner />}
        {loading && !error && <LoadingIcon />}
        {!loading && !error && (
          <AddAthleteForm
            first_name={athlete?.first_name}
            last_name={athlete?.last_name}
            email={athlete?.email}
            phone_number={athlete?.phone_number}
            plan={athlete?.plan}
            schedule={athlete?.schedule}
          />
        )}
      </ContentContainer>
    </div>
  );
}

export { SingleAthlete };
