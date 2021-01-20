import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class ImageGalleryItem extends Component {
  state = {
  };

   render() { 
     return (
      <div>
       <li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>  
      </div>
    ); 
  }
}