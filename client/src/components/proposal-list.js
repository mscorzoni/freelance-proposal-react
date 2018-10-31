import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './proposal.css'




const ProposalList = ({proposals, onProposalSelect}) => {
 
    return (
            <div>
              <div className="list-group card-list">
                <a className="list-group-item list-group-item-action active">
                  <h1 className="headline">Proposals</h1>
                </a>
              {proposals.map( proposal => {
                return(
                  <div className="list-group-item" key={ `${proposal.customer} + ${proposal.tools}` }>
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