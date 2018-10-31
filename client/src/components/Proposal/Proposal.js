import React from 'react';

const proposal = (props) => (
  <ul>
    <li> Customer: {props.customer}</li>
    <li> Portfolio_url: {props.portfolio_url}</li>
    <li> Tools: {props.tools}</li>
    <li> Estimated_hours: {props.estimated_hours}</li>
    <li> Hourly_rate: {props.hourly_rate}</li>
    <li> Weeks_to_complete: {props.weeks_to_complete}</li>
    <li> Client_email: {props.client_email}</li>
  </ul>
);

export default proposal;