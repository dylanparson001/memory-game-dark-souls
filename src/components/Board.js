import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

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
  // score state
  const [currentScore, setCurrentScore] = useState(0);
  // state array for cards that have been clicked this session
  const [knownCards, setKnownCards] = useState([]);
  // state for high score
  const [highScore, setHighScore] = useState(0);
  // animations 
  const [entered, setEntered] = useState(true);

  // checks to see if the card has already been clicked
  // sent to card component, which is activated on click and sends back the cards name a
  const checkCards = (clickedCard) => {
    // check for clicked card in array
    if (knownCards.includes(clickedCard)) {
      // reset known cards and current score
      setKnownCards([]);
      setCurrentScore(0);
    } else {
      // add clicked card to known cards
      setKnownCards([...knownCards, clickedCard]);
      // increase current score
      setCurrentScore(currentScore + 1);
    }
  };

  useEffect(() => {
    // if the current score is higher than the high score, update the high score
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  // taken from javascript.info
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div >
      <Header className="header" currentScore={currentScore} highScore={highScore}></Header>
      <div className="game-board">
        {shuffle(characters)}
        {characters.map((character) => {
          return (
            <Card
              in={entered}
              checkCards={checkCards}
              key={character.name}
              name={character.name}
              image={character.image}
            />
          );
        })}

      </div>
    </div>
  );
};

export default Board;
