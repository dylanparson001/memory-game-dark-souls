import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/board.css";

// import images
import abysswatchersImage from "../images/abysswatchers.jpg";
import artoriasImage from "../images/artorias.jpg";
import firekeeperImage from "../images/firekeeper.jpg";
import gwynImage from "../images/gwyn.jpg";
import havelImage from "../images/havel.jpg";
import namelessKingImage from "../images/nameless.jpg";
import nashandraImage from "../images/nashandra.jpg";
import nitoImage from "../images/nito.jpg";
import patchesImage from "../images/patches.jpg";
import seathImage from "../images/seath.jpg";
import smoughImage from "../images/smough.jpg";
import solaireImage from "../images/solaire.jpg";

const Board = () => {
  // score state
  const [currentScore, setCurrentScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(true);
  }, isClicked);

  // Character object array
  const characters = [
    { name: "Abyss Watchers", image: abysswatchersImage },
    { name: "Artorias Of The Abyss", image: artoriasImage },
    { name: "Fire Keeper", image: firekeeperImage },
    { name: "Gwyn, Lord of Cinder", image: gwynImage },
    { name: "Havel The Rock", image: havelImage },
    { name: "The Nameless King", image: namelessKingImage },
    { name: "Nashandra", image: nashandraImage },
    { name: "Gravelord Nito ", image: nitoImage },
    { name: "Patches  ", image: patchesImage },
    { name: "Seath The Scaleless", image: seathImage },
    { name: "Smough the Executioner", image: smoughImage },
    { name: "Solaire of Astora", image: solaireImage },
  ];

  // taken from javascript.info
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="game-board">
      <h2>{currentScore}</h2>
      {shuffle(characters)}
      {characters.map((character) => {
        return (
          <Card
            key={character.name}
            onClick={() => setCurrentScore(currentScore + 1)}
            name={character.name}
            image={character.image}
          />
        );
      })}
    </div>
  );
};

export default Board;
