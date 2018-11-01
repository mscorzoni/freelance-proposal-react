import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Proposal.css';

const proposal = ({proposal}) => {
  return (
    <div className="list-group-item" key={proposal.id}>
      <h5 className="list-group-item">{proposal.customer}</h5>
      <p className="list-group-item-text"> {proposal.hourly_rate * proposal.estimated_hours}</p>
    </div>
  );
};

export default proposal;