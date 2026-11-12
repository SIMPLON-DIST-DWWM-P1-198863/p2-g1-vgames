import type { Game } from "../App";
import Carrousel from "./Carrousel";

type GamesReleaseProps = {
  games: Game[];
};
function GamesRelease({ games }: GamesReleaseProps) {
  return (
    <>
      <h2>Futures releases</h2>
      <p>Coming soon : Calendrier de jeux à venir</p>
      <Carrousel containerGames={games} nb_max={8} />
    </>
  );
}

export default GamesRelease;
