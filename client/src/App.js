import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Documents from './components/documents';
import NewProposal from './containers/NewProposal/NewProposal';
import Homepage from './components/Homepage/Homepage';
import Proposals from './containers/Proposals/Proposals';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route path="/documents" component={Documents} />
            <Route path="/proposals" component={Proposals} />
            <Route path="/proposal" component={NewProposal} />
            <Route path="/" component={Homepage} />
          </Switch>
      </div>
    );
  }
}

export default App;
