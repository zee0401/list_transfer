import React from "react";

const ItemList = ({ data = [] }) => {
  return (
    <div className="card">
      <ul>
        {data.map((list, index) => (
          <input type="checkbox">{list}</input>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
