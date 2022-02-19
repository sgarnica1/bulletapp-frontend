import { useAthletes } from "../../contexts/AthletesContext";
import { useDashboard } from "../../contexts/DashboardContext";
import { useNavigate } from "react-router-dom";

// Components
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { AthletesList } from "../../components/AthletesList/AthletesList";
import { AthleteRow } from "../../components/AthletesList/AthleteRow";
import { ErrorBanner } from "../../components/ErrorBanner/ErrorBanner";
import { Banner } from "../../components/Banner/Banner";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./athletes.scss";

function Athletes() {
  const navigate = useNavigate();

  const { athletesData } = useAthletes();
  const { athletes, loadingAthletes, errorAthletes } = athletesData;

  const { searchValue, setSearchValue, searchDataFromInput } = useDashboard();

  const data = searchDataFromInput(athletes);

  return (
    <div className="Athletes">
      <Banner
        title={"Atletas"}
        description={
          "Visualiza, modifica o agrega nuevos atletas en esta sección"
        }
      />
      <ContentContainer>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

        <AthletesList
          title={"Inscripciones recientes"}
          route={"/atletas"}
          header={"Clase"}
          error={errorAthletes}
          loading={loadingAthletes}
          data={data}
          // Render functions
          onError={() => (
            <ErrorBanner
              description={
                "Ocurrió un error al cargar la información de los atletas"
              }
            />
          )}
          render={(athlete) => (
            <AthleteRow
              key={athlete.id}
              name={`${athlete.first_name} ${athlete.last_name}`}
              date={athlete.created}
              plan={athlete.plan}
              params={athlete.schedule}
            />
          )}
        ></AthletesList>
        <button className="Athletes__add-btn" onClick={() => navigate("nuevo")}>
          +
        </button>
      </ContentContainer>
    </div>
  );
}

export { Athletes };
