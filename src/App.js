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
  const [activeTab, setActiveTab] = useState("all-items");

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

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          onClick={() => setActiveTab("all-items")}
          className={activeTab === "all-items" ? "active" : ""}
        >
          All Items
        </button>
        <button
          onClick={() => setActiveTab("add-item")}
          className={activeTab === "add-item" ? "active" : ""}
        >
          Add Item
        </button>
        <button
          onClick={() => setActiveTab("update-item")}
          className={activeTab === "update-item" ? "active" : ""}
        >
          Update Item
        </button>
        <button
          onClick={() => setActiveTab("remove-item")}
          className={activeTab === "remove-item" ? "active" : ""}
        >
          Remove Item
        </button>
        <button
          onClick={() => setActiveTab("search-item")}
          className={activeTab === "search-item" ? "active" : ""}
        >
          Search Item By ID
        </button>
        <button
          onClick={() => setActiveTab("category-items")}
          className={activeTab === "category-items" ? "active" : ""}
        >
          Display Items by Category
        </button>
        <button
          onClick={() => setActiveTab("sort-items")}
          className={activeTab === "sort-items" ? "active" : ""}
        >
          Sort Items
        </button>
        <button
          onClick={() => setActiveTab("low-stock")}
          className={activeTab === "low-stock" ? "active" : ""}
        >
          Low Stock Items
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "all-items" && <AllItemsDisplay items={items} />}
        {activeTab === "add-item" && <ItemForm addItem={addItem} />}
        {activeTab === "update-item" && (
          <UpdateForm updateItem={updateItem} items={items} />
        )}
        {activeTab === "remove-item" && (
          <RemoveForm removeItem={removeItem} items={items} />
        )}
        {activeTab === "search-item" && <SearchForm items={items} />}
        {activeTab === "category-items" && <CategoryDisplay items={items} />}
        {activeTab === "sort-items" && <SortItems items={items} />}
        {activeTab === "low-stock" && <LowStockItems items={items} />}
      </div>
    </div>
  );
}

export default App;
