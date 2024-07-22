const Item = ({ item, handleChange }) => {
  return (
    <div className="label">
      <label>
        <input type="checkbox" onChange={() => handleChange(item)} />
        {item}
      </label>
    </div>
  );
};

export default Item;
