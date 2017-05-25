import React, { Component } from 'react';
import './App.css';
import data from './data';
import ViewSelector from './ViewSelector';
import AddImage from './AddImage';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    data.get().then(images => this.setState({ images }));
  }

  render() {
    const { images } = this.state;

    return (
      <div className='App'>
        <h1 className='App-header'>Super Cute Bunny Image Gallery</h1>
        <ViewSelector data={images} />
        <AddImage />
      </div>
    );
  }
}

export default App;
