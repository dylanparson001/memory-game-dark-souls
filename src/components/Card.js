import { useState, useEffect } from "react";
const Card = (props) => {
  return (
    <div className="character-cards" onClick={props.onClick}>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
