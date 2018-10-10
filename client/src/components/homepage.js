import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './proposal.css';



export default class Homepage extends Component {
  state = {isOpen: false};

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded nav-styles">
        <div className='container'>
          <ul className='nav'>
            <li className='nav-item'>

              <a className='nav-link' href="/">Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/documents'>Docs</a>
            </li>
            <li>
              <div className="d-inline-block dropdown-links dropdown" >
                <button className="btn btn-outline-primary" id="proposalDropdown" onClick={this.toggleOpen}>
                  Proposals
                </button>
                <div className={menuClass} aria-labelledby="proposalDropdown">
                  <a className="dropdown-item" href="/proposals">Proposals</a>
                  <a className="dropdown-item" >New Proposal</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
 }