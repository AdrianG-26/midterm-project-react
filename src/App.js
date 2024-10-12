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
import TabNavigation from "./components/TabNavigation";

function App() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

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

  const renderActiveTab = () => {
    switch(activeTab) {
      case 0: return <ItemForm addItem={addItem} />;
      case 1: return <UpdateForm updateItem={updateItem} items={items} />;
      case 2: return <RemoveForm removeItem={removeItem} items={items} />;
      case 3: return <CategoryDisplay items={items} />;
      case 4: return <AllItemsDisplay items={items} />;
      case 5: return <SearchForm items={items} />;
      case 6: return <SortItems items={items} />;
      case 7: return <LowStockItems items={items} />;
      default: return null;
    }
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {renderActiveTab()}
      </div>
    </div>
  );
}

export default App;