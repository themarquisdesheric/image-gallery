import React, { Component } from 'react';
import './App.css';
import data from './data';
import List from './List';
import Thumbnail from './Thumbnail';

class App extends Component {
  constructor() {
    super();
    
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
        <List data={images} />
        {/*<Thumbnail data={images} />*/}
      </div>
    );
  }
}

export default App;
