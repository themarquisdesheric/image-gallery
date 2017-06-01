import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Nav from './components/Nav';
import Home from './components/Home';
import Albums from './components/Albums';
import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Albums} />

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
