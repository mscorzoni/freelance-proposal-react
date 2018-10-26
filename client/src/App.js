import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Proposals from './components/proposals';
import Documents from './components/documents';
import NewProposal from './containers/NewProposal/NewProposal';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Homepage />
          <Switch>
            <Route path="/documents" component={Documents} />
            <Route path="/proposals" component={Proposals} />
            <Route path="/proposal" component={NewProposal} />
          </Switch>
      </div>
    );
  }
}

export default App;
