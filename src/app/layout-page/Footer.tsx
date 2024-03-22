import React from "react";
import logo from "../../assets/images/pokemon.png";
import logoRight from "../../assets/images/pokemonRight.png";
import letter from "../../assets/images/pokemonHeader.png";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div
        style={{
          minHeight: "15vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
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
          <div style={{ marginLeft: 10 }}>
            <Image src={logoRight} alt="" width={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
