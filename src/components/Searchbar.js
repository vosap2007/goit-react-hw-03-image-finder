import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class Searchbar extends Component {
  state = {
    photoName: '',
  };

  handleNameChange = e => {
this.setState({photoName: e.currentTarget.value.toLowerCase()});
  };

   render() { 
     return (
      <div>
         <header className="searchbar">
  <form /*className="SearchForm"*/>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      /*className="SearchForm-input"*/
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
      </div>
    ); 
  }
}

