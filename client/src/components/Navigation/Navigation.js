import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';



export default class Navigation extends Component {
  state = { isOpen: false };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
  toggleDisable = () => this.setState({isOpen: false});

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded nav-styles">
        <div className='container'>
          <ul className='nav'>
            <li className='nav-item'>

              <Link to="/" className="nav-link" onClick={this.toggleDisable}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/documents' className="nav-link" onClick={this.toggleDisable}>Docs</Link>
            </li>
            <li>
              <div className="d-inline-block dropdown-links dropdown" >
                <button className="btn btn-outline-primary" id="proposalDropdown" onClick={this.toggleOpen}>
                  Proposals
                </button>
                <div className={menuClass} aria-labelledby="proposalDropdown">
                  <Link to="/proposals" className="dropdown-item" onClick={this.toggleOpen} >Proposals</Link>
                  <Link to="/proposal" className="dropdown-item" onClick={this.toggleOpen} >New Proposal</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}