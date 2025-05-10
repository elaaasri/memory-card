const DisplayPokemonCards = ({
  cards,
  onShuffle,
  getCardObj,
  // setScore,
  // setBestScore,
  // setGameOver,
}) => {
  const handleCardClick = (e) => {
    onShuffle();
    getClickedCard(e);
  };

  const getClickedCard = (e) => {
    const cardElement =
      e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
    const cardName = cardElement.lastElementChild.textContent;
    const clickedCard = cards.find((card) => card.name == cardName);
    getCardObj(clickedCard);
  };

  // const handleClickedCardEvent = (e) => {
  //   const cardElement =
  //     e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
  //   const cardName = cardElement.lastElementChild.textContent;
  //   const targetCard = cards.find((card) => card.name == cardName);

  //   if (targetCard.isClicked) {
  //     setGameOver();
  //     // setBestScore(score);
  //   } else {
  //     targetCard.isClicked = true;
  //     handleScoreIncreament();
  //   }
  // };

  // const handleScoreIncreament = () => {
  //   setScore((prevScore) => prevScore + 1);
  // };

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
