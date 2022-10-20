import React from "react";

const completedForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#664de5",
          color: "white",
          borderRadius: "2rem",
          width: "4rem",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        &#x2714;
      </div>
      <div>
        <h2>Congratulation, Eren!</h2>
        <p style={{ color: "rgb(68, 59, 59)", fontSize: "0.8rem" }}>
          You have completed onboarding, you can start using Eden!
        </p>
      </div>
    </div>
  );
};

export default completedForm;
