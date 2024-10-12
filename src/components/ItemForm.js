// ItemForm.js
import React, { useState } from "react";

function ItemForm({ addItem, items = [] }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Clothing");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if items is defined before using .some()
    if (items && items.some((item) => item.id === id)) {
      alert("This ID already exists. Please use a unique ID.");
      return;
    }

    // Check if ID is unique
    if (items.some((item) => item.id === id)) {
      alert("This ID already exists. Please use a unique ID.");
      return;
    }

    // Check if quantity and price are positive numbers
    if (parseInt(quantity) <= 0 || parseFloat(price) <= 0) {
      alert("Quantity and Price must be positive numbers.");
      return;
    }

    const newItem = {
      id,
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      category,
    };
    addItem(newItem);
    alert("Item added successfully!");

    // Clear input boxes
    setId("");
    setName("");
    setQuantity("");
    setPrice("");
    setCategory("Clothing");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Item</h3>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;