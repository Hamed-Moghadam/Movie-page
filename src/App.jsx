import { useState, useContext } from "react";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResBox from "./components/home/res-searchall/resbox";
import Signup from "./components/login/sign up/signup";
import Signin from "./components/login/sign in/signin";
import Anime from "./components/home/main-box-home/anime/anime";

function App() {
  const [InputValue, setvalue] = useState("");
  const [ResAPI, setRes] = useState();
  const [nameanime, setname] = useState([
    "Naruto",
    "One Piece",
    "Jujutsu Kaisen",
    "Blue Lock",
    "Attack on Titan",
    "Demon Slayer: Kimetsu no Yaiba",
    "Tokyo Ghoul",
    "one punch man",
    "Naruto",
    "One Piece",
  ]);
  const [namemovie, setmovie] = useState([
    "The batman",
    "Interstellar",
    "inception",
    "tenet",
    "harry potter",
    "star wars",
    "dune",
    "avengers",
    "Justice League",
    "barbie",
  ]);
  const [nameseries, setseries] = useState([
    "Teen Wolf",
    "Game of Thrones",
    "Friends",
    "the office",
    "Vampire Diaries",
    "the boys",
    "Stranger Things",
    "the 100",
    "black list",
    "Breaking Bad",
  ]);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/Anime"
          element={<Anime animes={nameanime} tittle={"Anime"} />}
        />
        <Route
          path="/Movie"
          element={<Anime animes={namemovie} tittle={"Movie"} />}
        />
        <Route
          path="/Series"
          element={<Anime animes={nameseries} tittle={"Series"} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
