import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="lefter" />
        <div className="map section">
          <label className="title siteFont">Site Map</label>
          <ul className="vertical_list">
            <li>
              <Link to="/classes#class_info">Classes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/facility">Facility</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Map</Link>
            </li>
            <li>
              <Link to="/fbnews">News</Link>
            </li>
            <li>
              <Link to="/classes">Schedule</Link>
            </li>
          </ul>
        </div>
        <div className="links section">
          <label className="title siteFont">Links</label>
          <ul className="vertical_list">
            <li><a href="https://www.facebook.com/MSK-Main-Street-Kickboxing-121595357867256/" target="_blank" rel="noopener noreferrer" className="ng-binding">Facebook</a></li>
            <li ng-repeat="link in links" className="ng-scope"><a href="https://goo.gl/4iJzfm" target="_blank" rel="noopener noreferrer" className="ng-binding">Google</a></li>
            <li ng-repeat="link in links" className="ng-scope"><a href="https://twitter.com/MSKtrainer" target="_blank" rel="noopener noreferrer" className="ng-binding">Twitter</a></li>
            <li ng-repeat="link in links" className="ng-scope"><a href="http://www.youtube.com/user/mainstreetkickboxing" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);