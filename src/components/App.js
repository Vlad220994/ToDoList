import React from 'react';

import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';

const App = () => {
  const toDoData = [
    { key: 1, label: 'Drink Coffee', important: false },
    { key: 2, label: 'Play Football', important: true },
    { key: 3, label: 'Sleep', important: false }
  ];

  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos = { toDoData } />
    </div>
  );
}

export default App;
