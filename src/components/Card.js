const Card = (props) => {
  return (
    <div
      className="character-cards"
      onClick={() => props.checkCards(`${props.name}`)}
    >
      <img src={props.image} alt={`$props.name`} />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
