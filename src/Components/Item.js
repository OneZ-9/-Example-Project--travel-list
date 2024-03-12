export default function Item({ itemProp, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemProp.packed}
        onChange={() => {
          onToggleItems(itemProp.id);
        }}
      />
      <span style={itemProp.packed ? { textDecoration: "line-through" } : {}}>
        {itemProp.quantity} {itemProp.description}
      </span>
      <button onClick={() => onDeleteItems(itemProp.id)}>❌</button>
    </li>
  );
}
