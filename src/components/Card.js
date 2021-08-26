import { Transition, CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
const Card = (props) => {
  
  return (
    <CSSTransition
      unmountOnExit
      in={props.in}
      timeout={{ appear: 0, enter: 0, exit: 300 }}
      classNames='roll'
      appear
      unmountOnExit>
      <div
        className="character-cards"
        onClick={() => {
          props.checkCards(`${props.name}`)
        }}
      >
        <img src={props.image} alt={`$props.name`} />
        <h2>{props.name}</h2>
      </div>
    </CSSTransition >
  );
};

export default Card;
