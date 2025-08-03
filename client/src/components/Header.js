import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a href="/auth/google" className="nav-link">
              <span className="icon icon-login icon-left"></span>
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1" className="nav-item">
            <Payments />
          </li>,
          <li key="3" className="nav-item credits-display">
            <span className="icon icon-wallet icon-left"></span>
            <span className="credits-text">Credits: {this.props.auth.credits}</span>
          </li>,
          <li key="2" className="nav-item">
            <a href="/api/logout" className="nav-link">
              <span className="icon icon-logout icon-left"></span>
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="app-header">
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
          >
            <span className="icon icon-dashboard icon-left"></span>
            SurveyMaster
          </Link>
          <ul className="nav-menu">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
