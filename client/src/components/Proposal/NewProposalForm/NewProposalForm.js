import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const newProposalForm = (props) => (
    <div>
      <form>
        <div className="form-group">
          <label>Customer Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="ABC Company"
            name="customer"
            onChange={props.onChange}
            />
        </div>
        <div className="form-group">
          <label>Portfolio URL</label>
          <input
            className="form-control"
            type="text"
            placeholder="http://www.acme.com"
            name="portfolio_url"
           onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Tools that you'll use on the project</label>
          <input
            className="form-control"
            type="text"
            placeholder="Ruby on Rails, React, Angular"
            name="tools"
            onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Estimated Hours</label>
          <input
            className="form-control"
            type="number"
            name="estimated_hours"
            onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Hourly Rate</label>
          <input
            className="form-control"
            type="number"
            name="hourly_rate"
            onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Weeks to Complete</label>
          <input
            className="form-control"
            type="number"
            name="weeks_to_complete"
            onChange={props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Client Email <em>(Optional)</em></label>
          <input
            className="form-control"
            type="email"
            name="client_email"
            onChange={props.onChange}
          />
        </div>
      </form>
    </div>
);


export default newProposalForm;