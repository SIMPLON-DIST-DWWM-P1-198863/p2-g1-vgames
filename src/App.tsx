import { useEffect, useState } from "react";
import PromoSection from "./components/PromoSection.tsx";

export type Game = {
  id: number;
  title: string;
  image: string;
  genre: string;

  platforms: string[]; //means ["blabla", "blabla"]
  release_date: string;
  developer: string;
  publisher: string;
  rating: string;
  description: string;
  price: number;
};

function App() {
  //API section:
  const [games, setGames] = useState<Game[]>([]); //equivalent to myGames, updateMyGames
  const nb_max = 6; //limit the number of displayed games

  useEffect(() => {
    const getGame = async () => {
      const response = await fetch(
        "https://materiel-apprentissage.github.io/api/video-games.json",
      );
      const data = await response.json();
      const short_data = data
        .filter((game: Game) => game.id !== 4) //remove id:4 correspond to Super Mario Odyssey
        .slice(0, nb_max);
      setGames(short_data); //update all nb_max games to games
    };
    getGame();
  }, []);

  return (
    <div>
      <PromoSection containerGames={games} />
    </div>
  );
}

export default App;
