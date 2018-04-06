import React, { Component } from 'react';
import DavidScott from '../../_img/staff/david-scott.jpg';
import DannyKelly from '../../_img/staff/danny-kelly.png';
import './Staff.css';

class Page extends Component {
  render() {
    return (
      <div className="Staff main">
        <div className="middle">
          <h1 className="siteFont secondary">Staff</h1>
          <div className="blackBox">
            <h3>Danny kelly</h3>
            <img src={DannyKelly} className="rightImg" title="Danny Kelly" alt="Danny Kelly" />
            <p>Danny Kelly’s martial arts background started when he was only five years old. His first martial arts training was in Shotokan Karate throughout his school years. Since high school he has studied Muay Thai, Boxing and what is now called MMA. Danny spent time in Thailand where Muay Thai originated. Danny has competed in Karate, Muay Thai, and Boxing. He's held five different titles in two weight classes including United States ISKA Light Heavy Weight Champion and two time golden gloves finalist. Teaching and training is what he loves most and that is why he has spent the last 20 plus years doing just that. Believing that proper body mechanics and being a good athlete are all essential to becoming a good fighter. With that said anyone can still learn to be very efficient at the skills of MMA for self-defense or just getting a great workout. Teaching has always come natural to Danny and his love of people and sport has made MSK what it is today.</p>
            <ul className="square">
              <li>27-1 Career Record</li>
              <li>United States ISKA Light Heavy Weight Champion</li>
              <li>Two Time Golden Gloves Finalist</li>
            </ul>
            <div style={{ clear: 'both' }}></div>

            <h3>David Scott</h3>
            <img src={DavidScott} className="rightImg" title="David Scott" alt="David Scott" />
            <p>David Scott is Brazilian Jiu Jitsu Brown Belt under SauloRibeiro Blackbelt, Ben Eaton.  David has been a dedicated Brazilian Jiu Jitsu and Combative Arts instructor for nearly a decade, training children, serviceman, law enforcement as well as the recreational and competitive martial artist.  David is devoted to maintaining Jiu Jitsus self-defense roots while preparing students for modern competition.</p>
            <ul className="square">
              <li>21 Year Combat Veteran</li>
              <li>Brown Belt Brazilian Jiu Jitsu</li>
              <li>Army Master Combatives Instructor</li>
              <li>Law Enforcement Defensive Tactics Instructor/Writer</li>
            </ul>
            <div style={{ clear: 'both' }}></div>

          </div></div>
      </div>
    );
  }
}

export default Page;
