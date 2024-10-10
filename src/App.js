import React, { useState } from "react";
import AllItemsDisplay from "./AllItemsDisplay";
import CategoryDisplay from "./CategoryDisplay";
import ItemForm from "./ItemForm";
import LowStockItems from "./LowStockItems";
import RemoveForm from "./RemoveForm";
import SearchForm from "./SearchForm";
import SortItems from "./SortItems";
import UpdateForm from "./UpdateForm";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (id, field, newValue) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: newValue } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <ItemForm addItem={addItem} />
      <UpdateForm updateItem={updateItem} items={items} />
      <RemoveForm removeItem={removeItem} items={items} />
      <CategoryDisplay items={items} />
      <AllItemsDisplay items={items} />
      <SearchForm items={items} />
      <SortItems items={items} />
      <LowStockItems items={items} />
    </div>
  );
}

export default App;
