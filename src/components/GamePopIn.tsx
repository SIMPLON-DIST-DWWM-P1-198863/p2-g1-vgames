import type { Game } from "../App.tsx";
import styles from "../styles/GamePopIn.module.css";

interface PopInProps {
  sampleGame: Game | null;
  closePopIn: () => void;
  isOpen: boolean;
}

function GamePopIn({ sampleGame, closePopIn, isOpen }: PopInProps) {
  if (!isOpen || !sampleGame) return null;
  return (
    <section className={styles.popIn}>
      <button type="button" onClick={closePopIn}>
        X
      </button>

      <figure>
        <img
          className={styles.thumbsize}
          src={sampleGame.image}
          alt={`${sampleGame.title}.png`}
          onError={(evt) => {
            evt.currentTarget.src = "/missingImg.png";
          }}
        />
      </figure>

      <div>
        <h3 className={styles.gameTitle}>{sampleGame.title}</h3>
        <p className={styles.paragraph}>
          <span>Genre : {sampleGame.genre}</span>

          <span className={styles.game_description}>
            "{sampleGame.description}"
          </span>

          <span>Plateformes disponibles : {sampleGame.platforms}</span>

          <span>Date de sortie : {sampleGame.release_date}</span>

          <span>Développé par : {sampleGame.developer}</span>

          <span>Classification : {sampleGame.rating}</span>

          <span>Prix initial : {sampleGame.price} €</span>
        </p>
      </div>
    </section>
  );
}

export default GamePopIn;
