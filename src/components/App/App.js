import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ToDoList from '../ToDoList/ToDoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';

const App = () => {
  const toDoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Play Football', important: true },
    { id: 3, label: 'Sleep', important: false }
  ];

  return(
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <ToDoList todos = { toDoData } />
    </div>
  );
}

export default App;
