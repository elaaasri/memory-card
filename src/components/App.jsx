import DisplayPokemonCards from "./DisplayPokemonCard";
import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";

// app func :
const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // api effect :
  useEffect(() => {
    fetchPokemonApi(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    ).then((data) => setCards(data));
  }, []);
  // shuffles cards randomly :
  const shuffleCards = () => {
    const shuffledCards = [...cards]; // make a shallow copy
    for (let i = 0; i < cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = temp;
    }
    setCards(shuffledCards); // render shuffled cards
  };
  // handle game win logic :
  const handleWin = (cardObj) => {
    if (cardObj.isClicked) {
      console.log("#".repeat(20));
      alert("game over");
      gameOver();
      setBestScore(score);
    } else {
      console.log("#".repeat(20));
      console.log("increment score");
      setScore((prevScore) => prevScore + 1);
      console.log("make click true");
      cardObj.isClicked = true;
    }
  };

  const gameOver = () => {
    cards.map((card) => (card.isClicked = false)); // set all cards isClicked to false
    setScore(0); // set score to 0
  };

  // const handleScoreIncreament = () => {
  //   setScore((prevScore) => prevScore + 1);
  // };

  // const handleClickedCardEvent = () => {
  //   console.log(clickedCardObj);
  //   if (clickedCardObj.isClicked) {
  //     // setScore(0);
  //     // gameOver();
  //     // setScore(0);
  //     // setBestScore(score);
  //   } else {
  //     clickedCardObj.isClicked = true;
  //     handleScoreIncreament();
  //   }
  // };

  console.log(bestScore, score);
  console.log(bestScore > score);

  return (
    <>
      <h1>Score Board : {score}</h1>
      <h1>
        {/* Best Score : {bestScore > score ? bestScore : setBestScore(score)} */}
      </h1>
      <h1> Best Score : {bestScore}</h1>
      <DisplayPokemonCards
        cards={cards}
        shuffleCards={shuffleCards}
        setScore={setScore}
        handleWin={handleWin}
      />
    </>
  );
};

export default App;

/**
 * 1- takes the clicked pokemon and store its event that being clicked (in a object)
 * 2- if its not clicked increase score board state
 *  otherwise return
 * 3- if its already clicked the game is over
 */
