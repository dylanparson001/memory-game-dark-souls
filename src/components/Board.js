import React from "react";
import Card from "./Card";

// import images
import abysswatchers from "../images/abysswatchers.jpg";
import artorias from "../images/artorias.jpg";
import firekeeper from "../images/firekeeper.jpg";
import solaire from "../images/solaire.jpg";
import seath from "../images/seath.jpg";

const Board = () => {
  return (
    <div>
      <Card charImage={firekeeper} />
      <Card charImage={abysswatchers} />
    </div>
  );
};

export default Board;
