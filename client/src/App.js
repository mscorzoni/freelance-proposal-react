import React, { Component } from 'react';
import './App.css';
import Documents from './components/documents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App">
          <h1 className="App-title">Hello!</h1>
        </header>
        <Documents />
      </div>
    );
  }
}

export default App;
