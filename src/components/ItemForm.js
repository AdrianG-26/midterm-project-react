import React, { useState } from 'react';
import './ItemForm.css';
import Modal from './Modal'; // Import the Modal component

function ItemForm({ addItem, items }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate unique ID
    if (items && items.some((item) => item.id === id)) {
      setError('ID already exists! Please use a unique ID.');
      return;
    }

    // Validate quantity and price
    if (quantity < 0 || price < 0) {
      setError('Quantity and Price cannot be negative.');
      return;
    }

    // Clear any previous error
    setError('');

    // Create new item
    const newItem = {
      id,
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      category
    };

    // Add the item using the provided addItem function
    addItem(newItem);

    // Show success modal
    setShowModal(true);

    // Clear the form fields
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('Clothing');

    // Automatically close the modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h3>Add Item</h3>

      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <button type="submit">Add Item</button>

      {/* Show the modal if showModal is true */}
      {showModal && (
        <Modal
          message="Item added successfully!"
          onClose={() => setShowModal(false)}
        />
      )}
    </form>
  );
}

export default ItemForm;
