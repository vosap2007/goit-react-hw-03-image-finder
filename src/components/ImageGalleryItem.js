import React, { Component } from 'react';
import styles from '../styles.modules.css';

export default class ImageGalleryItem extends Component {
  state = {
    photo: [],
    loading: false,
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoName !== this.props.photoName) {
      this.setState({loading: true});
      fetch(`https://pixabay.com/api/?q=${this.props.photoName}&page=1&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(photo => this.setState({photo: photo.hits}))
      .finally(() => this.setState({loading: false}));
    }
  }
  render() {
    return (
      <div>
        {this.state.photo.length > 0 && (
          <ul className="ImageGallery">
            {this.state.photo.map(({ id, tags, webformatURL, webformatWidth }) => (
                <li key={id} className="ImageGalleryItem">
                  <img src={webformatURL} alt={tags} className="ImageGalleryItem-image"/>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    );
  } 
}
//https://pixabay.com/api/?q=tree&page=1&key=19156356-c40e703531fee6556ca92e5f2&image_type=photo&orientation=horizontal&per_page=12
/* className="ImageGalleryItem-image"*/ 

/*<div>
       <li className="ImageGalleryItem">
       <img src='https://pixabay.com/get/gaf97fddca723beaf8782a81c6fbfe9cb226651d2eee58d2790cd5501c15e6728d2c9e40cc64ebae691ad5856c7b7e3aedbfe10a6a453ea20d11f074a0bfd34c1_640.jpg' alt=""  />
       </li>
      </div>*/


      /* {this.state.photo && this.state.photo.map(({largeImageURL, webformatURL, id, tags}) =>
        <li className="ImageGalleryItem" key={id}>
        <img src={webformatURL} alt={tags}  />
        </li>
         )
        }*/
        
        
    /*    render() { 
     return (
      <div>
        {this.state.loading && <h1>Загружаем...</h1>}
        {!this.props.photoName && <div>Введите свой запрос.</div>}
      </div>
      
    ); 
  }*/