import { useState } from "react";

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  const itemList = items.map((item) => <li key={item.id}>{item.value}</li>);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>{itemList}</ul>
      <h2>{JSON.stringify(items)}</h2>
    </div>
  );
};

export default HookCounterFour;
