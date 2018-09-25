import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './proposal.css'



const ProposalList = ({proposals, onProposalSelect}) => {

    // const proposalId = proposal.id.proposalId;

    return (
            <div>
              <div className="list-group col-md-4 float-right card-list">
                <a className="list-group-item list-group-item-action active">
                  <h1 className="headline">Proposals</h1>
                </a>
              {proposals.map( proposal => {
                return(
                  <div className="list-group-item">
                    <h5 className="list-group-item" onClick={() => onProposalSelect(proposal)}>{proposal.customer}</h5>
                    <p className="list-group-item-text">
                      { proposal.hourly_rate * proposal.estimated_hours}
                    </p>
                  </div>
                  )
              })}
              </div>
            </div>

          )}   

export default ProposalList;