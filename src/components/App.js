import React, { Component } from 'react';
//import Button from './Button';
//import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
//import Loader from './Loader';
//import Modal from './Modal';
import Searchbar from './Searchbar';
//import styles from '../styles.module.css';

export default class App extends Component {
  state = {
    photoName: '',
  };

  handleFormSubmit = photoName => {
    this.setState({photoName});
  };

  /*componentDidMount() {
    this.setState({loading: true});

    fetch('https://pixabay.com/api/?q=dogs&page=1&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12')
    .then(res => res.json())
    .then(photo => this.setState({photo}));
    .finally(() => this.setState({loading: false}));
  }*/

  render() {
  return (
    <div>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGalleryItem photoName={this.state.photoName}/>
    </div>
      /*<div>
        {this.state.loading && <h1>Загружаем...</h1>}
          {this.state.photo &&
          <div>{this.state.photo.likes}</div>}
      </div>*/
    );
  }
}

/*<Button />
          <ImageGallery />
          <ImageGalleryItem />
          <Loader />
          <Modal />
          <Searchbar />*/