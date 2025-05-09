import DisplayPokemonCards from "./DisplayPokemonCard";
import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";

// app func :
const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchPokemonApi(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    ).then((data) => setCards(data));
  }, []);

  console.log(cards);

  // shuffle cards randomly :
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

  const gameOver = () => {
    cards.map((card) => (card.isClicked = false));
    setScore(0);

    console.log("GAME OVER".repeat(30));
    console.log(score, bestScore);
    console.log(cards);
  };

  console.log(score);

  return (
    <>
      <h1>Score Board : {score}</h1>
      <h1>Best Score : {bestScore}</h1>
      <DisplayPokemonCards
        cards={cards}
        onShuffle={shuffleCards}
        setScore={setScore}
        setBestScore={setBestScore}
        setGameOver={gameOver}
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
