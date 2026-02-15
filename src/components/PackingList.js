import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  // let sortedItems;

  // if (sortBy === "input") sortedItems = items;

  // if (sortBy === "description")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));

  // // if (sortBy === "packed") sortedItems = items.slice().sort((a,b)=>a.packed === b.packed ? 0 : a.packed ? 1 : -1)
  // if (sortBy === "packed")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => Number(b.packed) - Number(a.packed));

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case "description":
        return a.description.localeCompare(b.description);
      case "packed":
        // Puts unpacked (0) before packed (1)
        return Number(a.packed) - Number(b.packed);
      case "input":
      default:
        return 0; // Keep original order
    }
  });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
