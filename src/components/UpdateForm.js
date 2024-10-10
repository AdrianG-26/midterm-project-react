import React, { useState } from "react";

function UpdateForm({ updateItem, items }) {
  const [id, setId] = useState("");
  const [field, setField] = useState("quantity");
  const [newValue, setNewValue] = useState(0);

  const handleUpdate = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      const oldValue = item[field];
      updateItem(id, field, newValue);
      alert(
        `${field} of ${item.name} is updated from ${oldValue} to ${newValue}`
      );
    } else {
      alert("Item not found!");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h3>Update Item</h3>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input
        type="number"
        placeholder="New Value"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateForm;
