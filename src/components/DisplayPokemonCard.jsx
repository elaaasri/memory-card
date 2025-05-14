import ReactParallaxTilt from "react-parallax-tilt";

const DisplayPokemonCards = ({ cards, shuffleCards, handleWin }) => {
  // handles card click :
  const handleCardClick = (e) => {
    shuffleCards();
    const clickedCard = getClickedCardObj(e, cards);
    handleWin(clickedCard);
  };
  return (
    <div className="pokemon-cards-container">
      {Object.values(cards).map((card, index) => {
        const { name, img } = card;
        return (
          <ReactParallaxTilt key={index}>
            <div className="pokemon-card" onClick={(e) => handleCardClick(e)}>
              {img != null ? (
                <img src={img} alt={name + " " + "image"} />
              ) : (
                <img
                  src="/public/imgs/poke-ball.png"
                  id="pokemon-ball"
                  alt={name + " " + "image"}
                />
              )}
              <div>{name}</div>
            </div>
          </ReactParallaxTilt>
        );
      })}
    </div>
  );
};
// get clicked card obj :
const getClickedCardObj = (e, cards) => {
  const cardElement =
    e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
  const cardName = cardElement.lastElementChild.textContent;
  const clickedCard = cards.find((card) => card.name == cardName);
  return clickedCard;
};

export default DisplayPokemonCards;
