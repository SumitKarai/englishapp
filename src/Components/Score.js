// src/components/Score.js
import React from "react";

const Score = ({ score, lives }) => {
  return (
    <div className="score">
      <div>Score: {score}</div>
      <div>Lives: {lives}</div>
    </div>
  );
};

export default Score;
