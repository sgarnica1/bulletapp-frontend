import "./home.scss";
import { Banner } from "./components/Banner/Banner";

function Home({user}) {
  return (
    <div className="Home">
      <Banner user={user}/>
      <section>Section</section>
    </div>
  );
}

export { Home };
