import styles from "../styles/PromoSection.module.css";
import GameThumb from "./GameThumb.tsx";
import type { Game } from "../App.tsx";
import GamePopIn from "./GamePopIn.tsx";
import { useState } from "react";

interface PromoSectionProps {
  containerGames: Game[];
  nb_max: number;
}

function PromoSection({ containerGames, nb_max }: PromoSectionProps) {
  const discount = 0.7;
  const new_containerGames = containerGames.slice(0, nb_max);

  const [selectedGame, setSelectedGame] = useState<Game | null>(null); //allows to select the game for the popin

  return (
    <div className={styles.promo_bloc}>
      <h2>
        Les bons plans
        <span className={styles.discountTitle}>
          {" : -"}
          {Math.floor((1 - discount) * 100)} %
        </span>
      </h2>

      <div className={styles.games_bloc}>
        {new_containerGames.map((game) => (
          <div key={game.id}>
            <div
              onClick={() => {
                setSelectedGame(game);
              }}
            >
              <GameThumb sampleGame={game} />
            </div>

            <p className={styles.price_bloc}>
              <span className={styles.originalPrice}>{game.price} €</span>

              {" ➤ "}

              <span className={styles.discountedPrice}>
                {Math.round(game.price * discount).toFixed(2)} €
              </span>
            </p>
          </div>
        ))}

        <GamePopIn
          sampleGame={selectedGame}
          closePopIn={() => setSelectedGame(null)} //means when we close the popin, there is no game
          isOpen={selectedGame !== null} //means we open the popin if there is a selected game
        />
      </div>
    </div>
  );
}

export default PromoSection;
