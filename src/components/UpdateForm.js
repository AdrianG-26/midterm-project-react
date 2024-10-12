// UpdateForm.js
import React, { useState } from "react";

function UpdateForm({ updateItem, items = [] }) {
  const [id, setId] = useState("");
  const [field, setField] = useState("quantity");
  const [newValue, setNewValue] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      let parsedValue;
      
      if (field === "quantity") {
        parsedValue = parseInt(newValue);
        if (isNaN(parsedValue) || parsedValue <= 0) {
          alert("Quantity must be a positive integer.");
          return;
        }
      } else if (field === "price") {
        parsedValue = parseFloat(newValue);
        if (isNaN(parsedValue) || parsedValue <= 0) {
          alert("Price must be a positive number.");
          return;
        }
      } else {
        parsedValue = newValue; // For non-numeric fields like name or category
      }

      const oldValue = item[field];
      updateItem(id, field, parsedValue);
      alert(`${field} of ${item.name} is updated from ${oldValue} to ${parsedValue}`);
      
      // Clear input fields
      setId("");
      setNewValue("");
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
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>
      {field === "category" ? (
        <select value={newValue} onChange={(e) => setNewValue(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      ) : (
        <input
          type={field === "quantity" ? "number" : "text"}
          placeholder={`New ${field}`}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          required
        />
      )}
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateForm;