import React, { Component } from 'react';
import DavidScott from '../../_img/staff/david-scott.jpg';
import './Staff.css';

class Page extends Component {
  render() {
    return (
      <div className="Staff main">
        <div className="middle">
          <h1 className="siteFont secondary">Staff</h1>
          <div className="blackBox">
            <h3>David Scott</h3>
            <img src={DavidScott} className="rightImg" title="David Scott" alt="David Scott" />
            <p>David Scott is Brazilian Jiu Jitsu Brown Belt under SauloRibeiro Blackbelt, Ben Eaton.  David has been a dedicated Brazilian Jiu Jitsu and Combative Arts instructor for nearly a decade, training children, serviceman, law enforcement as well as the recreational and competitive martial artist.  David is devoted to maintaining Jiu Jitsus self-defense roots while preparing students for modern competition.</p>
            <ul className="square">
              <li>21 Year Combat Veteran</li>
              <li>Brown Belt Brazilian Jiu Jitsu</li>
              <li>Army Master Combatives Instructor</li>
              <li>Law Enforcement Defensive Tactics Instructor/Writer</li>
            </ul>
          </div></div>
      </div>
    );
  }
}

export default Page;
