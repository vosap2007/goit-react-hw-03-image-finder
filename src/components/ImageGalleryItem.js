import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import styles from '../styles.modules.css';

export default class ImageGalleryItem extends Component {
  state = {
    photo: [],
    loading: false,
    error: null,
    page: 1,
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoName !== this.props.photoName) {
      this.setState({loading: true, photo: []});
      fetch(`https://pixabay.com/api/?q=${this.props.photoName}&page=${this.state.page}&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(photo => this.setState({photo: photo.hits, page: prevState.page + 1}),
      )
      .catch(error => this.setState({error}))
      .finally(() => this.setState({loading: false}));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  loadMore = () => {
      fetch(`https://pixabay.com/api/?q=${this.props.photoName}&page=${this.state.page}&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then((res) => {
          this.setState((prevState) => ({
            photo: [...prevState.photo, ...res.hits],
            page: prevState.page + 1,
          }));
        },
      );
  };

  handlePhoto = (event) => {
    event.preventDefault();

    this.props.onPhoto(this.state.photo)
    this.setState({photo: []});
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        className="Spiner"
      />}
        {this.state.error && <h1>Picture {this.props.photoName} not nyen</h1>}
        {this.state.photo.length > 0 && (
          <ul onClick={this.handlePhoto} className="ImageGallery">
            {this.state.photo.map(({ id, tags, webformatURL, webformatWidth }) => (
                <li key={id} className="ImageGalleryItem">
                  <img 
                  src={webformatURL} 
                  alt={tags} 
                  onClick={this.props.togleModal} 
                  className="ImageGalleryItem-image"/>
                </li>
              )
            )}
          <button type="submit" onClick={this.loadMore} className='Button'>Load more</button></ul>
        )}
        
      </div>
    );
  } 
}