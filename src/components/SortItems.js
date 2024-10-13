import React, { useState } from "react";

function SortItems({ items }) {
  const [sortField, setSortField] = useState("quantity");
  const [sortOrder, setSortOrder] = useState("ascending");

  const sortedItems = [...items].sort((a, b) => {
    const fieldA = sortField === "quantity" ? a.quantity : a.price;
    const fieldB = sortField === "quantity" ? b.quantity : b.price;

    if (sortOrder === "ascending") {
      return fieldA - fieldB;
    } else {
      return fieldB - fieldA;
    }
  });

  return (
    <div>
      <h3>Sort Items</h3>
      <form>
        <label>Sort by: </label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        <label>Order: </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending"> Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>

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
          {sortedItems.map((item) => (
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

export default SortItems;
