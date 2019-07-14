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

    const { label, onDeleted } = this.props;
    
    const { done, important = false} = this.state;

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
          onClick={ this.onLabelClick }>
          { label }
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onDeleted}> 
          <i className="fa fa-trash-o" />
        </button>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onMarkImportant}> 
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
