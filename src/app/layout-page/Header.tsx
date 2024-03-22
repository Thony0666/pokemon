import Link from "next/link";
import React from "react";
import logo from "../../assets/images/pokemon.png";
import letter from "../../assets/images/pokemonHeader.png";
import Image from "next/image";

function Header() {
  return (
    <>
      <div
        style={{
          minHeight: "10vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "black",
          borderBottom: "white solid 3px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: 10 }}>
            <Image src={logo} alt="" width={100} />
          </div>
          <div>
            <Image src={letter} alt="" width={100} />
          </div>
        </div>
        <Link href={"/client"}>
          <h1
            style={{
              color: "yellow",
              border: "yellow solid 2px",
              marginLeft: 20,
              padding: "5px 15px",
              borderRadius: 8,
              fontFamily: "monospace",
            }}
          >
            Accueil
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Header;
