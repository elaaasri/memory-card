const DisplayPokemonCards = ({ cards, onShuffle }) => {
  return (
    <div className="pokemon-cards-container">
      {cards.map((card, index) => {
        const [cardName, cardImg] = card;
        return (
          <div className="pokemon-card" key={index} onClick={onShuffle}>
            {cardImg != null ? (
              <img src={cardImg} alt={cardName + " " + "image"} />
            ) : (
              <img
                src="/public/imgs/pokemon-ball.png"
                id="pokemon-ball"
                alt={cardName + " " + "image"}
              />
            )}
            <div>{cardName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPokemonCards;
