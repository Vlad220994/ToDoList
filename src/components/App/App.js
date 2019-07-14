import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ToDoList from '../ToDoList/ToDoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';

export default class App extends Component {
  state = {
    toDoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Play Football', important: true },
      { id: 3, label: 'Sleep', important: false }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ toDoData}) => {
      const newToDoData = toDoData.filter(item => (
        item.id !== id
      ));

      return {
        toDoData: newToDoData
      }
    });
  }

  render() {
    return(
      <div className="App">
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <ToDoList todos = { this.state.toDoData } onDeleted={ this.deleteItem} />
      </div>
    );
  }
}
