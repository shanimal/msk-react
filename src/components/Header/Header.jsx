import './Header.css';
import logo from './logo_opt.png';
import Menu from '../Menu/Menu';
import React, { Component } from 'react';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    const currentTab = this.props.location.pathname.slice(1) || 'home';
    const { onMenuChange } = this.props;
    return (
      <header className="Header">
        <Link to="/" href="home">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="topper" />
        <Menu currentTab={currentTab} onChange={onMenuChange} />
        <Social />
      </header>
    );
  }
}

export default withRouter(Header);