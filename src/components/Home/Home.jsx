import './Home.css';
import ClassesLeft from "./ads/BJJSchedule.gif";
import freeWeekFront from "./ads/freePassFront.png";
import freeWeekBack from "./ads/freePassBack.png";
import Arrow from "./arrow.png";
import Seniors from "./ads/seniors_sm.jpg";
import MailChimp from '../MailChimp/MailChimp.jsx';
import React, { Component } from 'react';
import Slideshow from '../Slideshow/Slideshow';
import { Link } from 'react-router-dom';

const freeWeekSrcBack = '/static/freePassBack.pdf';
const freeWeekSrcFront = '/static/freePassFront.pdf';

class Home extends Component {

  render() {
    const rand = Math.random();
    const freeWeekSrc = rand <= 0.5 ? freeWeekSrcBack : freeWeekSrcFront;
    const freeWeekImg = rand <= 0.5 ? freeWeekBack : freeWeekFront;

    return (
      <div className="Home main">
        <div className="top">
          <div className="left">
            <div className="top-ad">
              <Slideshow />
            </div>
            <div className="feature-ad">
              <h2 className="siteFont">Senior Classes</h2>
              <Link to="classes#sf" className="linkWhite">
                <div className="bottom-ad">
                  <img alt="Seniors" src={Seniors} />
                  <div className='right'>
                    <h4>Our seniors are awesome!</h4>
                    <p>Get your kicks every Tuesday and Thursday from 10:45 to 11:30am with our class designed specifically with seniors in mind. Bring a friend to cheer you on, or meet new friends that like to stay in shape.
                      <span className="secondary more">More</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="ad">
              <div className="head siteFont">Newsletter</div>
              <div className="body">
                <MailChimp />
              </div>
            </div>
            <div className="ad">
              <div className="head siteFont">Updates</div>
              <div className="body">
                <a href="/classes#schedule">
                  <h3 className="secondary siteFont">New! BJJ!!!<br/>Brazilian<br/>Jiu-Jitsu</h3>
                  <img src={ClassesLeft} width="185" alt="Saturday Submission Class" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="blueBox left">
            <div className="title siteFont">Welcome to Main Street Kick Boxing</div>
            <div>
              At MSK you can train to get in shape with <a href="/classes#ct">Core Fitness</a> or
              become the best you can be in any of our fighting arts ranging from
              <a href="/classes#mt">Muay Thai Kickboxing</a>, <a href="/classes#bx">Boxing</a>,
              <a href="/classes#sb">Jui Jitsu &amp; Wrestling</a>. All classes are taught by well
              qualified trainers who carry expertise in all of these areas needed to get the best
              out of your body. If youre looking for group classes, private one-on-one training or
              if you want to train to compete, MSK has it all. Our <a href="/classes">full
              schedule</a> allows you to fit the right class into your busy life at the the right
              time. Open daily, both morning and night, 6 days a week for men, women &amp;
              children.
            </div>
          </div>
          <div className="right blueBox">
            <div className="title siteFont">
              <a target="_blank" href="_img/FREE-PASS-WB.pdf">
                <span>One Week</span> FREE
              </a>
            </div>
            <div>
              <a target="_blank" href={freeWeekSrc}>
                <img className="freeWeek" src={freeWeekImg} alt="Free Week"/></a>
              <p>MSK currently offers a one week pass.</p>
              <p>
                <a target="_blank" href={freeWeekSrc}>
                  Click Here to find out details
                  <img src={Arrow} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
