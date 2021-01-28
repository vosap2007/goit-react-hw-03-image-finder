import React, { Component } from 'react';
import styles from '../styles.modules.css';

export default class Modal extends Component {
  state = {
  };

   render() { 
     return (
       <div className="Overlay">
         <div className="Modal">
         {this.props.openModalPhoto.map(({ tags, webformatWidth }) => (
                  <img 
                  src={webformatWidth} 
                  alt={tags} />
              )
            )}
         </div>
       </div>  
    ); 
  }
}