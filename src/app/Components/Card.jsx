import React from "react";
import imgDesc3 from "../../assets/images/toys-5353951_1920.jpg";
import Image from "next/image";

function CardPokemon(props) {
  const name = props.name;
  return (
    <>
      <div
        style={{
          minHeight: "10vh",
          //   border: "red solid 2px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          position: "relative",
          boxShadow: 5,
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <div>
          <Image src={imgDesc3} alt={name} width={"100%"} height={200} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 3,
            // border: "red solid 2px",
            width: "100%",
          }}
        >
          <div> {name}</div>
          <div>
            <button
              style={{
                padding: "2px 6px",
                backgroundColor: "#F2D718",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
            >
              Détail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPokemon;