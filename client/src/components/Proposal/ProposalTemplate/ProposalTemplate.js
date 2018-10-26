import React from 'react';

const proposalTemplate = (props) => (
  <div>
    
    <p> Hi {props.customer},</ p>


    <p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href={props.portfolio_url}>here</a>.</p>


    <p>To successfully build out the application I will be utilizing <strong>{props.tools}</strong> , and a number of other tools to ensure that the project follows industry wide best practices.</p>


    <p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>


    <p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take <strong>{props.estimated_hours} hours</strong> in development time to complete. The project should take {props.weeks_to_complete} weeks to complete and with my hourly rate of <strong>{props.hourly_rate}/hour</strong>, the estimated total will be <strong>USD$ {props.hourly_rate * props.estimated_hours}</strong>.</p>


    <p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>


    <p>I am excited to working with you and build out this project.</p>

  </div>
);

export default proposalTemplate;