import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProposalForm from '../../components/Proposal/NewProposalForm/NewProposalForm';
import ProposalTemplate from '../../components/Proposal/ProposalTemplate/ProposalTemplate';

class NewProposal extends Component {
  state = {
    customer: '',
    portfolio_url: '',
    tools: '',
    estimated_hours: 0,
    hourly_rate: 0,
    weeks_to_complete: 0,
    client_email: ''
  }

  inputUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value} )
    console.log([event.target.name])
  }

  render() {
    return(
      <div className="card container form-containter">
        <div className="row">
          <div className="col-md-6">
            <h2>Create a Proposal</h2>
            <NewProposalForm onChange={this.inputUpdate.bind(this)}
              />
          </div>
        <div className="col-md-6">
          <ProposalTemplate 
              customer={this.state.customer}
              portfolio_url={this.state.portfolio_url}
              tools={this.state.tools}
              estimated_hours={this.state.estimated_hours}
              hourly_rate={this.state.hourly_rate}
              weeks_to_complete={this.state.weeks_to_complete}
              client_email={this.state.client_email}
              />
        </div>
      </div>
     </div> 
    );
  }


}

export default NewProposal;