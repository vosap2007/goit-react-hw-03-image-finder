import React, { Component } from 'react';
import styles from '../styles.modules.css';

export default class Searchbar extends Component {
  state = {
    photoName: "",
  };

  handleNameChange = event => {
    this.setState(
      {photoName: event.currentTarget.value.toLowerCase()
       });
  };

  handleSubmit = event => {
    event.preventDefault();

if (this.state.photoName.trim() === '') {
  alert('Введите правильно запрос.');
  return;
}

    this.props.onSubmit(this.state.photoName)
    this.setState({photoName: ''});
  };

   render() { 
     return (
      <div>
         <header className="searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      value={this.state.photoName}
      onChange={this.handleNameChange}
      placeholder="Search images and photos"
    />
  </form>
</header>
      </div>
    ); 
  }
}

