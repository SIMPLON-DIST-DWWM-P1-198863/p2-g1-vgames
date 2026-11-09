import { useEffect, useState } from "react";
import PromoSection from "./components/PromoSection.tsx";
import Footer from "./components/Footer.tsx";
import Formulaire from "./components/Formulaire.tsx";
import Header from "./components/Header.tsx";

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
      <Header />
      <PromoSection containerGames={games} nb_max={8} />
      <Formulaire />
      <Footer />
    </div>
  );
}

export default App;
