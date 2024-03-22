"use client";
import React, { useState, useEffect } from "react";
import imgDesc3 from "../../../assets/images/toys-5353951_1920.jpg";
import Image from "next/image";
export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [pokemon, setPokemon] = useState<any>(null);

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
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          //
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100vh" }}>
          <div>
            {pokemon && pokemon.sprites && (
              <img src={pokemon.sprites.front_default} alt="" />
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "50%",
            height: "100%",
          }}
        >
          {pokemon && (
            <div style={{ position: "relative" }}>
              <div style={{}}>
                <h1 style={{ fontSize: "5vh", fontWeight: "bold" }}>
                  {pokemon.name.toUpperCase()}
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <div style={{ width: "100%" }}>
                    <h2 style={{ fontWeight: "bold" }}>Type </h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2 style={{ fontWeight: "bold" }}>Poids </h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2 style={{ fontWeight: "bold" }}>Taille </h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2 style={{ fontWeight: "bold" }}>Numéro </h2>
                  </div>
                </div>
                <div>
                  <div style={{ width: "100%" }}>
                    <h2> :</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2>:</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2> :</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2> :</h2>
                  </div>
                </div>
                <div>
                  <div style={{ width: "100%" }}>
                    <h2> {pokemon.types[0].type.name}</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2> {pokemon.weight}</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2> {pokemon.height}</h2>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h2> {pokemon.order}</h2>
                  </div>
                </div>
              </div>

              {/* <h2>{pokemon.order}</h2> */}
              {/* <h2>{pokemon.types}</h2> */}
              {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
