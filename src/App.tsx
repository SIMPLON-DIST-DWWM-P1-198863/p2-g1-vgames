import { useEffect, useState } from "react";
import PromoSection from "./components/PromoSection.tsx";
import Footer from "./components/footer/Footer.tsx";
import Formulaire from "./components/Formulaire.tsx";
import Header from "./components/header/header";

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
  const nb_max = 8; //limit the number of displayed games

  useEffect(() => {
    const getGame = async () => {
      const response = await fetch(
        "https://materiel-apprentissage.github.io/api/video-games.json",
      );
      const data = await response.json();
      const short_data = data.slice(0, nb_max); //select from index 0 to index
      setGames(short_data); //update all nb_max games to games
    };
    getGame();
  }, []);

  return (
    <div>
      <Header />
      <PromoSection containerGames={games} />
      <Formulaire />
      <Footer />
    </div>
  );
}

export default App;
