import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './proposal.css'



  const Proposal = ({proposal, onProposalSelect}) => {
    if(!proposal) {
      return <div>Loading... </div>
    }
    const proposalId = proposal.id.proposalId;

    return(

      <div>
            <div className="card proposal-card col-md-8 float-left" key={proposal.id}>
              <a href={proposal.path}><h1>{proposal.customer}</h1></a>
              <div>

                <p>Hi { proposal.customer },</p>


                <p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href="{ proposal.portfolio_url }">here</a>.</p>


                <p>To successfully build out the application I will be utilizing <strong>{ proposal.tools }</strong> , and a number of other tools to ensure that the project follows industry wide best practices.</p>


                <p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>


                <p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take <strong>{ proposal.estimated_hours } hours</strong> in development time to complete. The project should take { proposal.weeks_to_complete } weeks to complete and with my hourly rate of <strong>{proposal.hourly_rate }/hour</strong>, the estimated total will be <strong>{ proposal.hourly_rate * proposal.estimated_hours }</strong>.</p>


                <p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>


                <p>I am excited to working with you and build out this project.</p>
              </div>
          </div>  
      </div>
    );
  };  

export default Proposal;