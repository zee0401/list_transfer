import React from "react";

const Action = ({ moveRight, moveLeft }) => {
  return (
    <div className="button">
      <button onClick={moveRight}>right</button>
      <button onClick={moveLeft}>left</button>
    </div>
  );
};

export default Action;
