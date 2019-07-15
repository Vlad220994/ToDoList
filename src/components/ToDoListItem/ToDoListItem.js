import React, { Component } from 'react';

import './ToDoListItem.css';

export default class ToDoListItem extends Component {
  
  state = {
    done: false,
    important: false
  }

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  } 

  render() {

    const { label, onToggleDone, onToggleImportant, important, done, onDeleted } = this.props;

    let ToDoListItem = "ToDoListItem";

    if (done) {
      ToDoListItem += " done";
    }

    if (important) {
      ToDoListItem += " important";
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }
    
    return(
      <span className={ ToDoListItem }>
        <span 
          className="ToDoListItemLabel" 
          style={ style }
          onClick={ onToggleDone }>
          { label }
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={ onDeleted }> 
          <i className="fa fa-trash-o" />
        </button>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}> 
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
