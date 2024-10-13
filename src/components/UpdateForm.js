import React, { useState } from "react";

function UpdateForm({ updateItem, items }) {
  const [id, setId] = useState("");
  const [field, setField] = useState("quantity");
  const [newValue, setNewValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if ID exists
    const item = items.find((item) => item.id === id);
    if (!item) {
      alert("Item not found!");
      return;
    }

    // Check if new value is a non-negative integer or non-negative number
    if (field === "quantity") {
      if (newValue < 0 || !Number.isInteger(newValue)) {
        alert("Quantity must be a non-negative integer.");
        return;
      }
    } else if (field === "price") {
      if (newValue < 0) {
        alert("Price must be a non-negative number.");
        return;
      }
    }

    const oldValue = field === "quantity" ? item.quantity : item.price;
    updateItem(id, field, newValue);

    // Clear all input fields
    setId("");
    setField("quantity");
    setNewValue("");

    alert(`${field.charAt(0).toUpperCase() + field.slice(1)} of Item ${item.name} is updated from ${oldValue} to ${newValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Item</h3>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <select value={field} onChange={(e) => setField(e.target.value)} required>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      {field === "quantity" ? (
        <input
          type="number"
          placeholder="New Quantity"
          value={newValue}
          onChange={(e) => setNewValue(parseInt(e.target.value, 10))}
          min="0"
          required
        />
      ) : (
        <input
          type="number"
          placeholder="New Price"
          value={newValue}
          onChange={(e) => setNewValue(parseFloat(e.target.value))}
          min="0.0"
          step="0.01"
          required
        />
      )}
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateForm;