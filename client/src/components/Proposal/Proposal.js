import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Proposal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const proposal = ({proposal}) => {
  return (
    <div className="list-group-item" key={proposal.id}>
      <div className="row">
        <div className="col-md-11">
          <h5 className="list-group-item">{proposal.customer}</h5>
          <p className="list-group-item-text"> {proposal.hourly_rate * proposal.estimated_hours}</p>
        </div>
        <div className="col-md-1 d-flex align-items-center">
          <FontAwesomeIcon className=""  icon={faTrash} />
        </div>

      </div>
    </div>

  );
};

export default proposal;