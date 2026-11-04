import styles from "../styles/GameThumb.module.css";
import ButtonFavorite from "./ButtonFavorite.tsx";

interface GameThumbProps {
  sampleGame: {
    title: string;
    image: string;
  };
}

function GameThumb({ sampleGame }: GameThumbProps) {
  return (
    <figure className={styles.organization}>
      <ButtonFavorite />
      <img
        className={styles.displayGame}
        src={sampleGame.image}
        alt={`${sampleGame.title}.png`}
        onError={(evt) => {
          evt.currentTarget.src = "/missingImg.jpg";
        }}
      />
      <figcaption>
        <p className={styles.displayGameTitle}>{sampleGame.title}</p>
      </figcaption>
    </figure>
  );
}

export default GameThumb;
