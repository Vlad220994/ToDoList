import React, { Component } from 'react';
import "./ItemAddForm.css"

export default class ItemAddForm extends Component {
  render () {
    const { onItemAdded } = this.props
    return(
      <div className="ItemAddForm">
        <button type="button" className="btn btn-outline-secondary" onClick={() => onItemAdded('Hello') }>Add Item</button>
      </div>
    );
  }
}