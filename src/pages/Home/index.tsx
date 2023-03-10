import React from "react";

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50vh",
      }}
      className="welcome"
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "rgb(35, 2, 95)",
        }}
        className="fadeInDown"
      >
        Welcome to app
      </h2>
    </div>
  );
};

export default Welcome;
