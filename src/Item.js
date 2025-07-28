// itemObj: one object from the items array, with { id, description, quantity, packed }.

// onDeleteItem: callback function from App.js to delete this item.

// onToggleItem: callback to toggle this item's packed state.
export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li className="list-detail">

      <input
        type="checkbox"
        //packed status lelo global app se
        value={itemObj.packed}
        //id lelo global app se
        onChange={() => onToggleItem(itemObj.id)} />

      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
