"use client";
import React, { useEffect, useState } from "react";

function ImageCard(props) {
  const id = props.id;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }

    fetchPokemon();

    // Cleanup function, in case you need it
    return () => {
      // Perform any cleanup if necessary
    };
  }, [id]);
  return (
    <div>
      {pokemon && pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt="" />
      )}
    </div>
  );
}

export default ImageCard;
