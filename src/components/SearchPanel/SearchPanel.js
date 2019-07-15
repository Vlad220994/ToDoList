import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term)
  }

  render () {
    return(
      <form className="SearchPanel" onSubmit={this.onSubmit}>
        <input 
          placeholder="search" 
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </form>
    );
  }
}
