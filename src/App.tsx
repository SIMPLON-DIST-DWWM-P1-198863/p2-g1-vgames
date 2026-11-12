import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Homepage from "./components/Homepage.tsx";
import GamesCatalogue from "./components/GamesCatalogue.tsx";
import GamesRelease from "./components/GamesRelease.tsx";
import MyAccount from "./components/MyAccount.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage all_games={games} />} />
        <Route path="/catalogue_de_jeux" element={<GamesCatalogue />} />
        <Route path="/jeux-a-venir" element={<GamesRelease />} />
        <Route path="/mon-compte" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
