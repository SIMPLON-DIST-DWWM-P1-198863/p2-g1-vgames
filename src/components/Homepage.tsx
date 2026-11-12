import PromoSection from "./PromoSection.tsx";
import Formulaire from "./Formulaire.tsx";
import type { Game } from "../App";

interface HomepageProps {
  all_games: Game[];
}

function Homepage({ all_games }: HomepageProps) {
  return (
    <>
      <PromoSection containerGames={all_games} nb_max={8} />
      <Formulaire />
    </>
  );
}

export default Homepage;
