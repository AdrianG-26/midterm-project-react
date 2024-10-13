import React, { useState } from "react";

function ItemForm({ addItem, items }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [category, setCategory] = useState("Clothing");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (items.some((item) => item.id === id)) {
      alert("This ID already exists. Please use a unique ID.");
      return;
    }

    
    if (quantity < 0 || !Number.isInteger(quantity)) {
      alert("Quantity must be a non-negative integer.");
      return;
    }

    if (price < 0) {
      alert("Price must be a non-negative number.");
      return;
    }

    if (!["Clothing", "Electronics", "Entertainment"].includes(category)) {
      alert("Please select a valid category.");
      return;
    }

    const newItem = {
      id,
      name,
      quantity,
      price,
      category,
    };

    addItem(newItem);

    setId("");
    setName("");
    setQuantity(0);
    setPrice(0.0);
    setCategory("Clothing");

    alert("Item added successfully!");
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
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        min="0"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        min="0.0"
        step="0.01"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select a category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;