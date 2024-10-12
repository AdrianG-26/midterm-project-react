// App.js
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
    <Router>
      <div className="App">
        <h1>Inventory Management System</h1>
        <nav>
          {/* Your navigation links here */}
        </nav>

        <Routes>
          <Route path="/" element={<AllItemsDisplay items={items} />} />
          <Route path="/add" element={<ItemForm addItem={addItem} items={items} />} />
          <Route
            path="/update"
            element={<UpdateForm updateItem={updateItem} items={items} />}
          />
          <Route
            path="/remove"
            element={<RemoveForm removeItem={removeItem} items={items} />}
          />
          <Route path="/search" element={<SearchForm items={items} />} />
          <Route path="/category" element={<CategoryDisplay items={items} />} />
          <Route path="/sort" element={<SortItems items={items} />} />
          <Route path="/lowstock" element={<LowStockItems items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;