import { CircularProgress } from "@mui/material";
import React from "react";

function Waiter() {
  return (
    <>
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
    </>
  );
}

export default Waiter;
