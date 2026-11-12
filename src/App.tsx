import { useEffect, useState } from "react";
import Homepage from "./components/Homepage.tsx";

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

  useEffect(() => {
    const getGame = async () => {
      const response = await fetch(
        "https://materiel-apprentissage.github.io/api/video-games.json",
      );
      const data = await response.json();
      setGames(data); //update all nb_max games to games
    };
    getGame();
  }, []);

  return (
    <div>
      <Homepage all_games={games} />
    </div>
  );
}

export default App;
