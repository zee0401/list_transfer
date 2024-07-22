import Item from "./Item";

const ItemList = ({ items, handleChange }) => {
  return (
    <div className="card">
      {items.map((item) => {
        return <Item key={item} item={item} handleChange={handleChange} />;
      })}
    </div>
  );
};

export default ItemList;
