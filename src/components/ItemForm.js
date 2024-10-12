import React, { useState } from "react";

function ItemForm({ addItem, items }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if ID is unique
    if (items.some(item => item.id === id)) {
      alert("This ID already exists. Please use a unique ID.");
      return;
    }

    // Check if quantity and price are greater than 0
    if (parseInt(quantity) <= 0 || parseFloat(price) <= 0) {
      alert("Quantity and Price must be greater than 0.");
      return;
    }

    // Check if a valid category is selected
    if (!["Clothing", "Electronics", "Entertainment"].includes(category)) {
      alert("Please select a valid category.");
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

    // Clear all input fields
    setId("");
    setName("");
    setQuantity("");
    setPrice("");
    setCategory("");
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
        min="1"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0.01"
        step="0.01"
        required
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        required
      >
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