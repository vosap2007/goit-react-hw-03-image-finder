import React, { Component } from 'react';
//import Button from './Button';
//import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
//import Loader from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';

export default class App extends Component {
  state = {
    photoName: "",
    showModal: false,
    photo: "",
  };
  

  togleModal = (photo) => {
    this.setState( state => ({
      showModal: !state.showModal,
      photo: !state.photo ? photo : "",
    }) )
  }

  handleFormSubmit = photoName => {
    this.setState({photoName});
  };

  handlePhotoSubmit = photo => {
    this.setState({photo});
  };

  render() {
  return (
    <div>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGalleryItem 
      photoName={this.state.photoName} 
      togleModal={this.togleModal}
      onPhoto={this.handlePhotoSubmit}/>
      
      {this.state.showModal && <Modal openModalPhoto={this.state.photo} togleModal={this.togleModal}>
        
      </Modal>
      }
    </div>
    );
  }
}