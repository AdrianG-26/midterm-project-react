import React, { useState } from "react";
// import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import AllItemsDisplay from "./components/AllItemsDisplay";
import CategoryDisplay from "./components/CategoryDisplay";
import ItemForm from "./components/ItemForm";
import LowStockItems from "./components/LowStockItems";
import RemoveForm from "./components/RemoveForm";
import SearchForm from "./components/SearchForm";
import SortItems from "./components/SortItems";
import TabNavigation from "./components/TabNavigation";
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
    <Router>
      <div className="App">
        <h1>Inventory Management System</h1>
        <TabNavigation />
        <div className="tab-content">
          <Routes>
            <Route path="/" element={<Navigate to="/all-items" />} />
            <Route
              path="/all-items"
              element={<AllItemsDisplay items={items} />}
            />
            <Route
              path="/add-item"
              element={<ItemForm addItem={addItem} items={items} />}
            />
            <Route
              path="/update-item"
              element={<UpdateForm updateItem={updateItem} items={items} />}
            />
            <Route
              path="/remove-item"
              element={<RemoveForm removeItem={removeItem} items={items} />}
            />
            <Route path="/search-item" element={<SearchForm items={items} />} />
            <Route
              path="/category-display"
              element={<CategoryDisplay items={items} />}
            />
            <Route path="/sort-items" element={<SortItems items={items} />} />
            <Route
              path="/low-stock"
              element={<LowStockItems items={items} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
