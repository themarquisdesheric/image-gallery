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
      images: []
    };
  }

  componentDidMount() {
    data.get().then(images => this.setState({ images }));
  }

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <h1 className="App-header">Super Cute Bunny Image Gallery</h1>
        {/*<List data={images} />*/}
        {/*<Thumbnail data={images} />*/}
        <Gallery data={images} />
      </div>
    );
  }
}

export default App;
