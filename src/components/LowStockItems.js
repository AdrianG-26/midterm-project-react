function LowStockItems({ items }) {
  const lowStockItems = items.filter((item) => item.quantity <= 5);

  return (
    <div>
      <h3>Low Stock Items (5 or less)</h3>
      {lowStockItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items with low stock!</p>
      )}
    </div>
  );
}

export default LowStockItems;
