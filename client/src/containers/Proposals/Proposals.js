import React, { Component } from 'react';
import axios from '../../axios-proposal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proposal from '../../components/Proposal/Proposal';

class Proposals extends Component {
  state = {
    proposals: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/proposals.json')
      .then(response => {
        console.log(response.data)
        this.setState({proposals: response.data})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <div className="list-group card-list">
          <a className="list-group-item list-group-item-action active">
            <h1 className="headline">Proposals</h1>
          </a>
          {this.state.proposals.map((proposal) => {
            return (
              <Proposal proposal={proposal} key={proposal.id} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Proposals;