import { useState } from "react";
import "./App.css";
import Action from "./components/Action";
import ItemList from "./components/ItemList";
import { intersection, not } from "./utils/utils";

function App() {
  const data = [1, 2, 3, 4];
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleChange = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems));
    console.log(checkedItems);
  };

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItems(not(checkedItems, rightCheckedItems));
  };

  return (
    <div className="container">
      <ItemList items={leftItems} handleChange={handleChange} />
      <Action moveLeft={moveLeft} moveRight={moveRight} />
      <ItemList items={rightItems} handleChange={handleChange} />
    </div>
  );
}

export default App;
