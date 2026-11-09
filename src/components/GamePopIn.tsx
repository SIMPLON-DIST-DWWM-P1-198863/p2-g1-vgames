import type { Game } from "../App.tsx";

interface PopInProps {
  containerGames: Game[];
}

function GamePopIn({ containerGames }: PopInProps) {
  return (
    <>
      {containerGames.map((game) => (
        <section>
          <figure>
            <img></img>
          </figure>
          <p></p>
        </section>
      ))}
    </>
  );
}
