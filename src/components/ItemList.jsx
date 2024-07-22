import React from "react";

const ItemList = ({ items, handleChange }) => {
  return (
    <div className="card">
      <ul>
        {items.map((list, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" onChange={() => handleChange(list)} />
              {list}{" "}
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
