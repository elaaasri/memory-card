// import { useState } from "react";

const DisplayPokemonCards = ({
  cards,
  onShuffle,
  setScore,
  setBestScore,
  setGameOver,
}) => {
  const handleClickedCardEvent = (e) => {
    const cardElement =
      e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
    const cardName = cardElement.lastElementChild.textContent;
    const targetCard = cards.find((card) => card.name == cardName);

    if (targetCard.isClicked) {
      setGameOver();
      setBestScore((prevScore) => prevScore + 1);
    } else {
      targetCard.isClicked = true;
      handleScoreIncreament();
    }
  };

  const handleScoreIncreament = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="pokemon-cards-container">
      {Object.values(cards).map((card, index) => {
        const { name, img } = card;
        return (
          <div
            className="pokemon-card"
            key={index}
            onClick={(e) => {
              onShuffle();
              handleClickedCardEvent(e);
            }}
          >
            {img != null ? (
              <img src={img} alt={name + " " + "image"} />
            ) : (
              // default pokemon img for cards with no img!
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
