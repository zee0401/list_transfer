import { useState } from "react";
import "./App.css";
import Action from "./components/Action";
import ItemList from "./components/ItemList";

function App() {
  const data = ["1", "2", "3", "4"];
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  const handleChange = (list) => {
    const currentIndex = checkedItem.indexOf(list);
    const newCheckedItem = [...checkedItem];

    if (currentIndex === -1) {
      newCheckedItem.push(list);
    } else {
      newCheckedItem.splice(currentIndex, 1);
    }

    setCheckedItem(newCheckedItem);
  };
  console.log(checkedItem);

  const moveRight = () => {
    setRightItems(checkedItem);
    setLeftItems();
  };
  const moveLeft = () => {
    console.log("move Left");
  };

  return (
    <div className="container">
      <ItemList items={leftItems} handleChange={handleChange} />
      <Action moveLeft={moveLeft} moveRight={moveRight} />
      <ItemList items={rightItems} />
    </div>
  );
}

export default App;
