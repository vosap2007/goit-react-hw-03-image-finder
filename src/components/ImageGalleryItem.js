import React, { Component } from 'react';
//import styles from '../styles.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    photo: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.photoName !== this.props.photoName) {
      fetch('https://pixabay.com/api/?q={this.props.photoName}&page=1&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(photo => this.setState({photo}));
    }
  }

   render() { 
     return (
      <div>
       {this.state.photo && <div>{this.state.photo.tags}</div>}
      </div>
    ); 
  }
}

/*<li className="ImageGalleryItem">
  <img src={this.props.photoName} alt="" className="ImageGalleryItem-image" />
</li> */ 