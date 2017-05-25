import React, { Component } from 'react';
import './App.css';
import data from './data';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: [],
      CurrentView: List
    };

    this.handleListView = this.handleListView.bind(this);
    this.handleThumbnailView = this.handleThumbnailView.bind(this);
    this.handleGalleryView = this.handleGalleryView.bind(this);
  }

  componentDidMount() {
    data.get().then(images => this.setState({ images }));
  }

  handleListView() {
    this.setState({ CurrentView: List });
  }
  
  handleThumbnailView() {
    this.setState({ CurrentView: Thumbnail });
  }
  
  handleGalleryView() {
    this.setState({ CurrentView: Gallery });
  }

  render() {
    const { images, CurrentView } = this.state;

    return (
      <div className='App'>
        <h1 className='App-header'>Super Cute Bunny Image Gallery</h1>
        <div className='button-container'>
          <button onClick={this.handleListView}>List</button>
          <button onClick={this.handleThumbnailView}>Thumbnail</button>
          <button onClick={this.handleGalleryView}>Gallery</button>
        </div>
        <CurrentView data={images} />
      </div>
    );
  }
}

export default App;
