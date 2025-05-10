const DisplayPokemonCards = ({ cards, shuffleCards, handleWin }) => {
  // handles card click :
  const handleCardClick = (e) => {
    shuffleCards();
    const clickedCard = getClickedCardObj(e);
    handleWin(clickedCard);
  };
  // get clicked card obj :
  const getClickedCardObj = (e) => {
    const cardElement =
      e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
    const cardName = cardElement.lastElementChild.textContent;
    const clickedCard = cards.find((card) => card.name == cardName);
    return clickedCard;
  };

  return (
    <div className="pokemon-cards-container">
      {Object.values(cards).map((card, index) => {
        const { name, img } = card;
        return (
          <div
            className="pokemon-card"
            key={index}
            onClick={(e) => handleCardClick(e)}
          >
            {img != null ? (
              <img src={img} alt={name + " " + "image"} />
            ) : (
              <img
                src="/public/imgs/pokemon-ball.png"
                id="pokemon-ball"
                alt={name + " " + "image"}
              />
            )}
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPokemonCards;
