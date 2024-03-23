"use client";
import React, { useEffect, useState } from "react";
import Waiter from "./Waiter";
import { CircularProgress } from "@mui/material";

function ImageCard(props) {
  const id = props.id;
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        // setLoad(false);
      }
    }

    fetchPokemon();

    // Cleanup function, in case you need it
    return () => {
      // Perform any cleanup if necessary
    };
  }, [id]);
  if (load) {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            height: "19vh",
            width: "100%",
            // position: "fixed",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backdropFilter: "blur(1px)",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <CircularProgress style={{ color: "yellowgreen" }} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {pokemon && pokemon.sprites && (
          <img
            src={pokemon.sprites.other.showdown.front_default}
            alt=""
            style={{ minHeight: "60px", maxHeight: "60px" }}
          />
        )}
      </div>
    );
  }
}

export default ImageCard;
