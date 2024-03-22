"use client";

import React, { useState, useEffect } from "react";
import Layout from "../layout-page/Layout";
import CardPokemon from "../Components/Card";
import { CircularProgress, Pagination } from "@mui/material";

interface Pokemon {
  name: string;
  url: string;
}

const PokeListComponent: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialPage, setInitialePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${initialPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [initialPage]);
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setInitialePage(value);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        {isLoading && (
          <div
            style={{
              height: "70vh",
              width: "100%",
              position: "fixed",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(1px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <CircularProgress style={{ color: "yellow" }} />
          </div>
        )}
        <div
          style={{
            // border: "red solid 2px",
            paddingRight: "5vh",
            paddingLeft: "5vh",
            maxHeight: "70vh",
            overflowY: "scroll",
            borderBottom: "white solid 3px",
          }}
        >
          <h1 style={{ textAlign: "center", fontSize: "7vh" }}>
            List of Pokemon
          </h1>

          {error && <p>Error: {error}</p>}
          {pokemonList.length > 0 && (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {pokemonList.map((pokemon) => (
                <div key={pokemon.name}>
                  <CardPokemon name={pokemon.name} idPokemon={pokemon.url} />
                </div>
              ))}
            </ul>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            style={{ color: "yellow" }}
            count={50}
            page={initialPage}
            onChange={changePage}
          />
        </div>
      </Layout>
    </div>
  );
};

export default PokeListComponent;
