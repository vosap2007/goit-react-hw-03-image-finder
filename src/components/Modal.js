import React, { Component } from 'react';
import styles from '../styles.modules.css';

export default class Modal extends Component {
  state = {
  };

  componentDidMount() {
    console.log('Это');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    console.log('ескейп');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };

  handleOverlay = event => {
if(event.currentTarget === event.target) {
  this.props.togleModal();
}
  };

   render() { 
     return (
      <div className="Overlay" onClick={this.handleOverlay}>
      <div className="Modal">
        <img src={this.props.openModalPhoto} alt="" />
      </div>
    </div>  
    ); 
  }
}