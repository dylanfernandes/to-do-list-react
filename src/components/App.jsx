import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [anItem, setAnItem] = useState("");
  const [items, setItems] = useState([]);

  function createItem(event) {
    const val = event.target.value;
    setAnItem(val);
  }
  function handleEvent() {
    setItems(prevValue => {
      var newKey;
      if (prevValue.length === 0) newKey = 0;
      else newKey = prevValue[prevValue.length - 1].key + 1;
      return [...prevValue, { key: newKey, value: anItem }];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={createItem} type="text" value={anItem} />
        <button onClick={handleEvent}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(x => (
            <Item key={x.key} item={x.value} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
