import { useEffect, useState } from "react";
import styles from "../styles/ButtonPrice.module.css";
import GameThumb from "./GameThumb.tsx";
import type { Game } from "../App.tsx";
import GamePopIn from "./GamePopIn.tsx";

function getNote(game: Game) {
  return (50 + ((game.id * 7) % 50)) / 10;
}

function getPrice(game: Game) {
  if (game.price === 0) {
    return "Gratuit";
  }
  return game.price.toFixed(2) + " €";
}
type ButtonPriceProps = {games:Game []}
function ButtonPrice({games}: ButtonPriceProps) {
  const [sortGames, setSortGames] = useState<Game[]>([]);
  const [sortPrice, setSortPrice] = useState(true);
  const [ascending, setAscending] = useState(true);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null); //allows to select the game for the popin

  useEffect(() => {
    const list = [...games];
    if (sortPrice) {
      list.sort((a, b) => a.price - b.price);
    } else {
      list.sort((a, b) => getNote(a) - getNote(b));
    }

    if (!ascending) {
      list.reverse();
    }

    setSortGames(list);
  }, [games, sortPrice, ascending]);

  let sort = "Notes";
  if (sortPrice) {
    sort = "Prix";
  }

  let arrow = "↓";
  if (ascending) {
    arrow = "↑";
  }

  return (
    <section className={styles.container}>
      <div className={styles.tri}>
        <button onClick={() => setSortPrice(!sortPrice)}> {sort}</button>
        <button onClick={() => setAscending(!ascending)}>{arrow}</button>
      </div>

      <ul className={styles.list}>
        {sortGames.map((game) => (
          
          
          <li key={game.id} className={styles.game}>
            <div
              onClick={() => {
                setSelectedGame(game);
              }}
            >
              <GameThumb sampleGame={game} />
              </div>
            <p className={styles.price}>{getPrice(game)}</p>
            <p className={styles.note}>{getNote(game).toFixed(1)} / 10</p>
          </li>
          
        ))}
      </ul>
      <GamePopIn
          sampleGame={selectedGame}
          closePopIn={() => setSelectedGame(null)} //means when we close the popin, there is no game
          isOpen={selectedGame !== null} //means we open the popin if there is a selected game
        />
     </section>
  );
}

export default ButtonPrice;