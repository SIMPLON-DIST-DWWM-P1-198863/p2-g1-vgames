import styles from "../styles/Filtre.module.css";
import { useEffect, useState } from "react";
import type { Game } from "../App.tsx";
import ButtonPrice from "./ButtonPrice.tsx";

export default function Filtre() {
  //API section:
  const [games, setGames] = useState<Game[]>([]); //equivalent to myGames, updateMyGames
  //limit the number of displayed games
  const [selectPlatform, setSelectPlatform] = useState("PC");
  const [prixMax, setPrixMax] = useState(50);
  
  //prixmax entre 0 et 100 avec sa valeur de depart a 50
  useEffect(() => {
    const getGame = async () => {
      const response = await fetch(
        "https://materiel-apprentissage.github.io/api/video-games.json",
      );
      const data = await response.json();
      //select from index 0 to index nb_max
      setGames(data); //update all nb_max games to games
    };
    getGame();
  }, []);

  return (
    <>
      <h2 className={styles.catalogue}>Catalogue de jeux:</h2>
      <section className={styles.filtres}>
        <div>
          <h3>Filtre de sélection</h3>
          <p>Plateformes:</p>
          <div className={styles.plateforms}>
            <label>
              <input
                type="radio"
                name="platform"
                onChange={() => setSelectPlatform("PlayStation 4")}
              />
              {"PlayStation 4"}
            </label>

            <label>
              <input
                type="radio"
                name="platform"
                defaultChecked
                onChange={() => setSelectPlatform("PC")}
              />
              {"PC"}
            </label>

            <label>
              <input
                type="radio"
                name="platform"
                onChange={() => setSelectPlatform("Xbox One")}
              />
              {"Xbox One"}
            </label>

            <label>
              <input
                type="radio"
                name="platform"
                onChange={() => setSelectPlatform("Nintendo Switch")}
              />
              {"Nintendo Switch"}
            </label>

            <label>
              <input
                type="radio"
                name="platform"
                onChange={() => setSelectPlatform("Multiplatform")}
              />
              {"Multiplatform"}
            </label>

            <label>
              <input
                type="radio"
                name="platform"
                onChange={() => setSelectPlatform("Wii U")}
              />
              {"Wii U"}
            </label>
          </div>
        </div>
        <div className={styles.range}>
          <label htmlFor="prix">Prix:</label>
          <input
            type="range"
            id="prix"
            name="prix"
            min="0"
            max="100"
            step="1"
            value={prixMax}
            onChange={(e) => setPrixMax(Number(e.target.value))}
          />
          <p>Entre 0€ et {prixMax}€</p>
        </div>
      </section>

      <section>
        <ButtonPrice
          games={games.filter((game) => {
            return (
              game.platforms.includes(selectPlatform) && game.price < prixMax
            );
          })}
        />
      </section>
    </>
  );
}
