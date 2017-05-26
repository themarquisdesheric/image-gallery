import React, { Component } from 'react';
import './App.css';
import dataApi from './dataApi';
import ViewSelector from './ViewSelector';
import AddImage from './AddImage';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: []
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    dataApi.get().then(images => this.setState({ images }));
  }

  handleAdd(image) {
    dataApi.addImage(image)
      .then(img => {
        this.setState({
          images: [...this.state.images, img]
        });
      });
  }

  render() {
    const { images } = this.state;

    return (
      <div className='App'>
        <h1 className='App-header'>Super Cute Bunny Image Gallery</h1>
        <ViewSelector data={images} />
        <AddImage onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
