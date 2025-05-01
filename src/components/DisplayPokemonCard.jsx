import { useState, useEffect } from "react";
import fetchPokemonApi from "../utils/fetchPokemonApi";

const DisplayPokemonCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchPokemonApi(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    ).then((pokemonCards) => setCards(pokemonCards));
  }, []);
  return (
    <div className="pokemon-cards-container">
      {cards.map((card, index) => {
        let cardName = card[0];
        let cardImg = card[1];
        return (
          <div className="pokemon-card" key={index}>
            {cardImg != null ? (
              <img src={cardImg} alt={cardName + " " + "image"} />
            ) : (
              <img
                src="/public/imgs/pokemon-ball.png"
                id="pokemon-ball"
                alt={cardName + " " + "image"}
              />
            )}
            <div>{cardName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPokemonCards;
