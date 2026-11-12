import PromoSection from "./PromoSection.tsx";
import Footer from "./Footer.tsx";
import Formulaire from "./Formulaire.tsx";
import Header from "./Header.tsx";
import type { Game } from "../App";

interface HomepageProps {
  all_games: Game[];
}

function Homepage({ all_games }: HomepageProps) {
  return (
    <>
      <Header />
      <PromoSection containerGames={all_games} nb_max={8} />
      <Formulaire />
      <Footer />
    </>
  );
}

export default Homepage;
