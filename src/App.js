import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/">
            <div className="container">
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
