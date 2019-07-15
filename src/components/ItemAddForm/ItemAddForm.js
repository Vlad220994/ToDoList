import React, { Component } from 'react';
import "./ItemAddForm.css"

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value  
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render () {
    return(
      <form className="ItemAddForm d-flex" onSubmit={this.onSubmit}>
        <input className="form-control" placeholder="Add text" onChange={this.onChange} value={this.state.label} />
        <button type="submit" className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}