import styles from "../styles/PromoSection.module.css";
import GameThumb from "./GameThumb.tsx";
import type { Game } from "../App.tsx";

interface PromoSectionProps {
  containerGames: Game[];
}

function PromoSection({ containerGames }: PromoSectionProps) {
  const discount = 0.6; //%tage discount
  return (
    <div className={styles.promo_bloc}>
      <h2>Les bons plans</h2>

      <div className={styles.games_bloc}>
        {containerGames.map((game) => (
          <div>
            <GameThumb key={game.id} sampleGame={game} />
            <p className={styles.price}>
              {game.price} € ➤ {Math.round(game.price * discount).toFixed(2)} €
              {/* -40% on the initial price, the new price can only display 2 numbers after . */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoSection;
