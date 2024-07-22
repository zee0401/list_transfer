import React from "react";

const Action = ({ moveLeft, moveRight }) => {
  return (
    <div className="button">
      <button onClick={moveLeft}>left</button>
      <button onClick={moveRight}>right</button>
    </div>
  );
};

export default Action;
