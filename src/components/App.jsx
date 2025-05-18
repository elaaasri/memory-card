import DisplayPokemonCards from "./DisplayPokemonCard";
import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";
import Header from "./Header";
import ScoreBoard from "./Scoreboard";
import PlayAgainPopUp from "./PlayAgainPopUp";

// app func :
const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
      if (score > bestScore) {
        setBestScore(score);
      }
      gameOver();
      alert(`ur final score is`, { score });
      setIsGameOver(true);
      // score > bestScore ? setBestScore(score) : bestScore;
      return;
    }
    handleScoreIncrement();
    cardObj.isClicked = true;
  };
  // increase score :
  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };
  // handles game over logic :
  const gameOver = () => {
    cards.map((card) => (card.isClicked = false)); // set cards isClicked to false
    setScore(0); // set score to 0
    // console.log(cards.length, score, bestScore);
  };
  // const handleGameEnd = () => {};
  return (
    <>
      <PlayAgainPopUp isGameOver={isGameOver} />
      <Header />
      <ScoreBoard
        score={score}
        bestScore={bestScore}
        cardsLength={cards.length}
      />
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
