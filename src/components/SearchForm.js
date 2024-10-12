import React, { useState } from "react";

function SearchForm({ items }) {
  const [searchId, setSearchId] = useState("");
  const [foundItem, setFoundItem] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === searchId);
    if (item) {
      setFoundItem(item);
      setError("");
    } else {
      setFoundItem(null);
      setError("Item not found!");
    }

    // Clear the input field
    setSearchId("");
  };

  return (
    <div>
      <h3>Search Item by ID</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Item ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}
      {foundItem && (
        <div>
          <h4>Item Found:</h4>
          <p>ID: {foundItem.id}</p>
          <p>Name: {foundItem.name}</p>
          <p>Quantity: {foundItem.quantity}</p>
          <p>Price: ₱{foundItem.price}</p>
          <p>Category: {foundItem.category}</p>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
