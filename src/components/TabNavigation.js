import React from 'react';
import { NavLink } from 'react-router-dom';

function TabNavigation() {
  const tabs = [
    { name: 'All Items', path: '/all-items' },
    { name: 'Add Item', path: '/add-item' },
    { name: 'Update Item', path: '/update-item' },
    { name: 'Remove Item', path: '/remove-item' },
    { name: 'Search Item', path: '/search-item' },
    { name: 'Category Display', path: '/category-display' },
    { name: 'Sort Items', path: '/sort-items' },
    { name: 'Low Stock Items', path: '/low-stock' }
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
}

export default TabNavigation;