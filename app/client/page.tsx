"use client";

import React, { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

const PokeListComponent: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // You can perform any clean-up here if needed
    };
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div>
      <h1>List of Pokemon</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemonList.length > 0 && (
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name} : {pokemon.url}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokeListComponent;
