import React, { useState } from "react";
import "./App.css";
import AllItemsDisplay from "./components/AllItemsDisplay";
import CategoryDisplay from "./components/CategoryDisplay";
import ItemForm from "./components/ItemForm";
import LowStockItems from "./components/LowStockItems";
import RemoveForm from "./components/RemoveForm";
import SearchForm from "./components/SearchForm";
import SortItems from "./components/SortItems";
import UpdateForm from "./components/UpdateForm";

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
