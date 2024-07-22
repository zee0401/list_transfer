import { useState } from "react";
import "./App.css";
import Action from "./components/Action";
import ItemList from "./components/ItemList";

function App() {
  const data = ["1", "2", "3", "4"];
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  return (
    <div className="container">
      <ItemList data={data} />
      <Action />
      <ItemList rightItems={rightItems} />
    </div>
  );
}

export default App;
