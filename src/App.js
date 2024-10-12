// App.js
import React, { useState } from "react";
import {
  NavLink,
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

        {/* Navigation Links */}
        <div className="tabs">
          <NavLink to="/" exact className="tab" activeClassName="active">
            All Items
          </NavLink>
          <NavLink to="/add-item" className="tab" activeClassName="active">
            Add Item
          </NavLink>
          <NavLink to="/update-item" className="tab" activeClassName="active">
            Update Item
          </NavLink>
          <NavLink to="/remove-item" className="tab" activeClassName="active">
            Remove Item
          </NavLink>
          <NavLink to="/search-item" className="tab" activeClassName="active">
            Search Item By ID
          </NavLink>
          <NavLink
            to="/category-items"
            className="tab"
            activeClassName="active"
          >
            Display Items by Category
          </NavLink>
          <NavLink to="/sort-items" className="tab" activeClassName="active">
            Sort Items
          </NavLink>
          <NavLink to="/low-stock" className="tab" activeClassName="active">
            Low Stock Items
          </NavLink>
        </div>

        {/* Routes for Different Components */}
        <div className="tab-content">
          <Routes>
            <Route path="/" element={<AllItemsDisplay items={items} />} />
            <Route
              path="/add-item"
              element={<ItemForm addItem={addItem} items={items} />}
            />{" "}
            {/* Pass items here */}
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
              path="/category-items"
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
