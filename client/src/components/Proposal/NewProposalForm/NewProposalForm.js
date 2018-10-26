import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const newProposalForm = (props) => (
  <form>
    <div className="form-group">
      <label>Customer Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="ABC Company"
        name={props.customer}
        />
    </div>
    <div className="form-group">
      <label>Portfolio URL</label>
      <input
        className="form-control"
        type="text"
        placeholder="http://www.acme.com"
        name={props.portfolio_url}
      />
    </div>
    <div className="form-group">
      <label>Tools that you'll use on the project</label>
      <input
        className="form-control"
        type="text"
        placeholder="Ruby on Rails, React, Angular"
        name={props.tools}
      />
    </div>
    <div className="form-group">
      <label>Estimated Hours</label>
      <input
        className="form-control"
        type="number"
        name={props.estimated_hours}
      />
    </div>
    <div className="form-group">
      <label>Hourly Rate</label>
      <input
        className="form-control"
        type="number"
        name={props.hourly_rate}
      />
    </div>
    <div className="form-group">
      <label>Weeks to Complete</label>
      <input
        className="form-control"
        type="number"
        name={props.weeks_to_complete}
      />
    </div>
    <div className="form-group">
      <label>Client Email <em>(Optional)</em></label>
      <input
        className="form-control"
        type="email"
        name={props.client_email}
      />
    </div>
  </form>
);


export default newProposalForm;