import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";

const DisplayPokemonCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchPokemonApi(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    ).then((pokemonCards) => setCards(pokemonCards));
  }, []);

  console.log(cards);

  return (
    <div className="pokemon-cards-container">
      {cards.map((card, index) => {
        const cardName = card[0];
        const cardImg = card[1];

        return (
          <div className="pokemon-card" key={index}>
            <img src={cardImg} alt={cardName + " " + "img"} />
            <div>{cardName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPokemonCards;
