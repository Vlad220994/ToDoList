import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ToDoList from '../ToDoList/ToDoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

import './App.css';

export default class App extends Component {
  
  maxId = 100;
  
  state = {
    toDoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Play Football', important: true },
      { id: 3, label: 'Sleep', important: false }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ toDoData}) => {
      const newToDoData = toDoData.filter(item => (
        item.id !== id
      ));

      return {
        toDoData: newToDoData
      }
    });
  };

  addItem = (text) => {
    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    };

    this.setState(({ toDoData }) => {
      const newArr = [...toDoData, newItem];
      
      return{
        toDoData: newArr
      }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      const oldItem = toDoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done }
      
      const newArray = [
        ...toDoData.slice(0, idx), 
        newItem, 
        ...toDoData.slice(idx+1)
      ];

      return {
        toDoData: newArray
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      const oldItem = toDoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      return {
        toDoData: [ ...toDoData.slice(0, idx), newItem, ...toDoData.slice(idx +1) ]
      }
    })
  };

  render() {
    const { toDoData } = this.state;
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;
    
    return(
      <div className="App">
        <AppHeader toDoCount={toDoCount} doneCount={doneCount} />
        <SearchPanel />
        <ItemStatusFilter />
        <ToDoList 
          todos = { this.state.toDoData } 
          onDeleted={ this.deleteItem} 
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} 
        />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}
