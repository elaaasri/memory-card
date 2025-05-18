import ReactParallaxTilt from "react-parallax-tilt";

const PlayAgainPopUp = ({ isGameOver }) => {
  if (isGameOver) {
    const allCards = document.querySelectorAll(".pokemon-card");
    allCards.forEach((card) => {
      // card.style.pointerEvents = "none";
      // card.style.scale = "1";
      <ReactParallaxTilt
        scale={1}
        glareEnable={false}
        glarePosition={"all"}
      ></ReactParallaxTilt>;
    });
  }

  return (
    <>
      <div
        id="overlay-window"
        style={{ display: isGameOver ? "flex" : "none" }}
      ></div>
      <div
        id="winner-popup-container"
        style={{ display: isGameOver ? "flex" : "none" }}
      >
        <span id="show-winner-div">Your final score is : 1</span>
        <button id="play-again-button">Play Again</button>
      </div>
    </>
  );
};
export default PlayAgainPopUp;
