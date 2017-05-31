import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import dataApi from './dataApi';
import AppHeader from './components/AppHeader';
import LoadingSpinner from './components/LoadingSpinner';
import Nav from './components/Nav';
import Home from './components/Home';
import Albums from './components/Albums';
// import ViewSelector from './components/ViewSelector';
// import AddImage from './components/AddImage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    dataApi.deleteImage(id)
      .then(() => {
        const { images } = this.state;
        const index = images.findIndex(img => img._id === id);

        images.splice(index, 1)
        this.setState({ images });
      });
  }

  render() {
    const { images } = this.state;

    if (!images.superCuteBunnies) return <LoadingSpinner />;

    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/albums" render={(props) => {
            return <Albums images={images} {...props} />
          }} />

          {/*<ViewSelector data={images}
            onDelete={this.handleDelete}
          />*/}
          {/*<AddImage onAdd={this.handleAdd} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
