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

  deleteProposal = (id) => {
    axios.delete(`http://localhost:3001/api/v1/proposals/${id}`)
      .then(response => {
        const proposals = this.state.proposals.filter(
          proposal => proposal.id !== id
        )
        this.setState({proposals: proposals})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <div className="list-group card-list">
          <span className="list-group-item list-group-item-action active">
            <h1 className="headline">Proposals</h1>
          </span>
          {this.state.proposals.map((proposal) => {
            return (
              <Proposal proposal={proposal} key={proposal.id} deleteProposal={this.deleteProposal} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Proposals;