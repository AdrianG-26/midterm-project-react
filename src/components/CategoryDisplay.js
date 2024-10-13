import React, { useState } from "react";

function CategoryDisplay({ items }) {
  const [category, setCategory] = useState("Clothing");

  const filteredItems = items.filter((item) => item.category === category);

  return (
    <div className="category-display">
      <h3>Display Items by Category</h3>
      <select className="select-category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₱{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryDisplay;