import ReactParallaxTilt from "react-parallax-tilt";
// show pokemon cards :
const DisplayPokemonCards = ({ cards, shuffleCards, handleWin }) => {
  // handles card click :
  const handleCardClick = (e) => {
    shuffleCards();
    const cardName = getClickedCardName(e);
    handleWin(cardName);
  };

  return (
    <div className="pokemon-cards-container">
      {Object.values(cards).map((card, index) => {
        const { name, img } = card;
        return (
          <ReactParallaxTilt
            scale={1.2}
            glareEnable={true}
            glarePosition={"all"}
            key={index}
          >
            <div className="pokemon-card" onClick={(e) => handleCardClick(e)}>
              {img != null ? (
                <img src={img} alt={name + " " + "image"} />
              ) : (
                <img
                  src="/imgs/poke-ball.png"
                  id="pokemon-ball-icon"
                  alt={name + " " + "image"}
                />
              )}
              <span>{name}</span>
            </div>
          </ReactParallaxTilt>
        );
      })}
    </div>
  );
};
// get clicked card obj :
const getClickedCardName = (e) => {
  const cardElement =
    e.target.className == "pokemon-card" ? e.target : e.target.parentElement;
  const cardName = cardElement.lastElementChild.textContent;
  return cardName;
};

export default DisplayPokemonCards;
