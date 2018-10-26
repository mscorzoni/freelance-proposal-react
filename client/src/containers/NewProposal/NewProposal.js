import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProposalForm from '../../components/Proposal/NewProposalForm/NewProposalForm';

class NewProposal extends Component {
  render() {
    return(
      <div className="card container form-containter">
        <div className="row">
          <div className="col-md-6">
            <NewProposalForm />
          </div>
        </div>
      </div>
    );
  }
}

export default NewProposal;