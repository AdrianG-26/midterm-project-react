// src/components/TabNavigation.js
import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    'Add Item',
    'Update Item',
    'Remove Item',
    'Category Display',
    'All Items',
    'Search Item',
    'Sort Items',
    'Low Stock Items'
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === index ? 'active' : ''}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;