import DisplayPokemonCards from "./DisplayPokemonCard";
import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";
import Header from "./Header";
import ScoreBoard from "./Scoreboard";

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
  // check winning effect :
  useEffect(() => {
    checkWinCondition();
  }, [score, cards]);
  // shuffles cards randomly :
  const shuffleCards = () => {
    const shuffledCards = [...cards]; // make a shallow copy
    for (let i = 0; i < shuffledCards.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = temp;
    }
    setCards(shuffledCards); // render shuffled cards
  };
  // handle game win logic :
  const handleWin = (cardName) => {
    handleIsCardClicked(cardName);
    // winning logic :
    const clickedCard = cards.find((card) => card.name == cardName);
    if (clickedCard.isClicked) {
      if (score > bestScore) {
        setBestScore(score);
      }
      alert(`U LOSE!, ur final score is ${score}.`);
      gameOver();
      return;
    }
    handleScoreIncrement();
  };
  // handle clicked card obj :
  const handleIsCardClicked = (cardName) => {
    setCards((prev) =>
      prev.map((card) =>
        card.name === cardName ? { ...card, isClicked: true } : card
      )
    );
  };
  // increase score :
  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };
  // handles game over logic :
  const gameOver = () => {
    setCards((prev) => prev.map((card) => ({ ...card, isClicked: false }))); // reset cards isClicked to false
    setScore(0); // reset score to 0
  };
  // check winning :
  const checkWinCondition = () => {
    if (score === cards.length && cards.length !== 0) {
      setBestScore(score);
      alert(`U WON!, ur final score is ${score}`);
      gameOver();
    }
  };
  return (
    <>
      <Header />
      <ScoreBoard
        score={score}
        bestScore={bestScore}
        cardsLength={cards.length}
      />
      <DisplayPokemonCards
        cards={cards}
        shuffleCards={shuffleCards}
        handleWin={handleWin}
      />
    </>
  );
};
export default App;
