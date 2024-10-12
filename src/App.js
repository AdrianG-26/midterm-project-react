// src/App.js
import React, { useState } from "react";
import "./App.css";
import AllItemsDisplay from "./components/AllItemsDisplay";
import CategoryDisplay from "./components/CategoryDisplay";
import ItemForm from "./components/ItemForm";
import LowStockItems from "./components/LowStockItems";
import RemoveForm from "./components/RemoveForm";
import SearchForm from "./components/SearchForm";
import SortItems from "./components/SortItems";
import TabComponent from "./components/TabComponent";
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
      <TabComponent>
        <div label="All Items">
          <AllItemsDisplay items={items} />
        </div>
        <div label="Add Item">
          <ItemForm addItem={addItem} />
        </div>
        <div label="Update Item">
          <UpdateForm updateItem={updateItem} items={items} />
        </div>
        <div label="Remove Item">
          <RemoveForm removeItem={removeItem} items={items} />
        </div>
        <div label="Search">
          <SearchForm items={items} />
        </div>
        <div label="Category Display">
          <CategoryDisplay items={items} />
        </div>
        <div label="Sort Items">
          <SortItems items={items} />
        </div>
        <div label="Low Stock">
          <LowStockItems items={items} />
        </div>
      </TabComponent>
    </div>
  );
}

export default App;
