import React from "react";

function Header() {
  return (
    <>
      <div
        style={{
          minHeight: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          borderBottom: "white solid 3px",
        }}
      >
        <h1 style={{ fontSize: "5vh", textAlign: "center", color: "white" }}>
          Header
        </h1>
      </div>
    </>
  );
}

export default Header;
