import React, { Component } from 'react';
import './App.css';
import Proposals from './components/proposals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App">
          <h1 className="App-title">Hello!</h1>
        </header>
        <Proposals />
      </div>
    );
  }
}

export default App;
