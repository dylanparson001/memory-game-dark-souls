const Card = (props) => {
  return (
    <div>
      <div>
        {console.log(props.charImage)}
        <img src={props.charImage} alt="Solaire of Astora" />
        <h2>Character Name</h2>
      </div>
    </div>
  );
};

export default Card;
