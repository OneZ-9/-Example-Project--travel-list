import { useState } from "react";
import "./App.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
//   { id: 4, description: "Socks", quantity: 12, packed: false },
//   { id: 5, description: "Socks", quantity: 12, packed: false },
//   { id: 6, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Stat />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item itemProp={item} key={item.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemProp, onDeleteItems }) {
  return (
    <li>
      <span style={itemProp.packed ? { textDecoration: "line-through" } : {}}>
        {itemProp.quantity} {itemProp.description}
      </span>
      <button onClick={() => onDeleteItems(itemProp.id)}>❌</button>
    </li>
  );
}

function Stat() {
  return (
    <footer className="stats">
      <em>👜 You have X items in your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
