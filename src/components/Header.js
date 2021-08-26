import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className = "game=title">DARK SOULS MEMORY GAME</h1>
      <h2>Current Score: {props.currentScore}</h2>
      <h2>High Score: {props.highScore}</h2>
      <h2>Highest Possible Score: 12</h2>
    </div>
  );
};

export default Header;
