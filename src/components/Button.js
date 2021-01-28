import React, { Component } from 'react';
import styles from '../styles.modules.css';

export default class Button extends Component {
  state = {
  };

   render() { 
     return (
      <div>
        <button type="submit" className='Button'>Load more</button>
      </div>
    ); 
  }
}
/*
window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });*/