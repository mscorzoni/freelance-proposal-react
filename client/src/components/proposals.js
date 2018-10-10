import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProposalList from './proposal-list'
import Proposal from './proposal'
import './proposal.css'


class Proposals extends Component {
  constructor(props){
    super(props)
    this.state = {
      proposals: [],
      selectedProposal: null
    }
  }


  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/proposals.json')
    .then(response => {
      console.log(response)
      this.setState({
        proposals: response.data,
        selectedProposal: response.data[0]
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 float-left">
              <Proposal proposal={this.state.selectedProposal} />
            </div>
            <div className="col-md-4 float-right">
              <ProposalList 
                onProposalSelect={selectedProposal => this.setState({selectedProposal})}
                proposals={this.state.proposals} />
            </div>
           </div>
        </div>
        )
  }
}
export default Proposals;