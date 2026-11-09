import styles from "../styles/PromoSection.module.css";
import GameThumb from "./GameThumb.tsx";
import type { Game } from "../App.tsx";

interface PromoSectionProps {
  containerGames: Game[];
  nb_max: number; //limit the number of displayed games
}

function PromoSection({ containerGames, nb_max }: PromoSectionProps) {
  const discount = 0.7; //%tage discount
  const new_containerGames = containerGames.slice(0, nb_max); //select from index 0 to index nb_max

  return (
    <div className={styles.promo_bloc}>
      <h2>Les bons plans : - {Math.floor((1 - discount) * 100)} %</h2>

      <div className={styles.games_bloc}>
        {new_containerGames.map((game) => (
          <div>
            <GameThumb key={game.id} sampleGame={game} />
            <p className={styles.price_bloc}>
              <span className={styles.originalPrice}>{game.price} €</span>
              {" ➤ "}
              <span className={styles.discountedPrice}>
                {Math.round(game.price * discount).toFixed(2)} €
                {/* -40% on the initial price, the new price can only display 2 numbers after . */}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoSection;
