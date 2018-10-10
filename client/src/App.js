import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Proposals from './components/proposals';
import Documents from './components/documents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <BrowserRouter>
          <Switch>
            <Route path="/documents" component={Documents} />
            <Route path="/proposals" component={Proposals} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
