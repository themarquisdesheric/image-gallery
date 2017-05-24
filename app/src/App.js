import React, { Component } from 'react';
import './App.css';
import data from './data';
import List from './List';

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
    return (
      <div className="App">
        <List data={this.state.images} />
      </div>
    );
  }
}

export default App;
