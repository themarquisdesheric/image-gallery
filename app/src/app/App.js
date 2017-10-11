import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import Home from '../components/Home';
import Albums from '../components/Albums';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Albums} />
        </div>
      </Router>
    );
  }
}

export default App;
