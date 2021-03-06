import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/documents' className="nav-link">Docs</Link>
            </li>
            <li>
              <div className="d-inline-block dropdown-links dropdown" >
                <button className="btn btn-outline-primary" id="proposalDropdown" onClick={this.toggleOpen}>
                  Proposals
                </button>
                <div className={menuClass} aria-labelledby="proposalDropdown">
                  <Link to="/proposals" className="dropdown-item">Proposals</Link>
                  <Link to="/proposal"className="dropdown-item">New Proposal</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
 }