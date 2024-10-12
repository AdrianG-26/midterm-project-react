import React, { useState } from "react";

function UpdateForm({ updateItem, items }) {
  const [id, setId] = useState("");
  const [field, setField] = useState("quantity");
  const [newValue, setNewValue] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    // Check if ID exists
    const item = items.find((item) => item.id === id);
    if (!item) {
      alert("Item not found!");
      return;
    }

    // Check if new value is a positive number
    if (field === "quantity" && parseInt(newValue) <= 0) {
      alert("Quantity must be a positive integer.");
      return;
    }
    if (field === "price" && parseFloat(newValue) <= 0) {
      alert("Price must be a positive number.");
      return;
    }

    updateItem(id, field, newValue);

    // Create a custom alert message
    if (field === "quantity") {
      alert(
        `Quantity of Item ${item.name} is updated from ${item.quantity} to ${newValue}`
      );
    } else {
      alert(
        `Price of Item ${item.name} is updated from $${item.price} to $${newValue}`
      );
    }

    // Clear all input fields
    setId("");
    setField("quantity");
    setNewValue("");
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
      {field === "quantity" ? (
        <input
          type="number"
          placeholder="Enter here"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          min="1"
          required
        />
      ) : (
        <input
          type="number"
          placeholder="Enter here"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
      )}
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateForm;
