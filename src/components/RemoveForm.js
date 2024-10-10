import React, { useState } from "react";

function RemoveForm({ removeItem, items }) {
  const [id, setId] = useState("");

  const handleRemove = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      removeItem(id);
      alert(`Item ${item.name} has been removed from the inventory`);
    } else {
      alert("Item not found!");
    }
  };

  return (
    <form onSubmit={handleRemove}>
      <h3>Remove Item</h3>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <button type="submit">Remove Item</button>
    </form>
  );
}

export default RemoveForm;
