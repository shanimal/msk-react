import React, { Component } from 'react';
import './Facility.css';

import bags from './gallery/bags.jpg';
import bagsT from './gallery/bags_t.jpg';
import cage from './gallery/cage.jpg';
import cageT from './gallery/cage_t.jpg';
import mirror from './gallery/mirror.jpg';
import mirrorT from './gallery/mirror_t.jpg';
import ring from './gallery/ring.jpg';
import ringT from './gallery/ring_t.jpg';
import uppercut from './gallery/uppercut.jpg';
import uppercutT from './gallery/uppercut_t.jpg';

class Page extends Component {
  constructor(props){
    super(props);
    this.state= {
      bigImage: '',
    }
  }
  getClickHandler(img){
    return () => {
      this.setState({
        bigImage: img,
      });
    };
  }
  render() {
    const bigImage = this.state.bigImage;
    return (
      <div className="Facility">
        <h1 className="siteFont secondary">Facility</h1>
        <div className="middle" ng-view="" autoscroll="">
          <div className="blackBox ng-scope" ng-controller="FacilityCtrl">
            <h3 className="primary">Features</h3>
            <table><tbody><tr><td>
              <ul>
                <li>5,000 SQ FT. FULLY MIRRORED AND MATTED TRAINING AREA</li>
                <li>FULL SIZE BOXING RING</li>
                <li>20ft MMA CAGE</li>
                <li>14 BANANA BAGS</li>
                <li>4 WALL MOUNTED UPPER CUT/CLINCH BAGS</li>
              </ul>
            </td><td>
              <ul>
                <li>2 SPEED BAGS</li>
                <li>WEIGHT LIFTING AREA</li>
                <li>3 COMMERCIAL TREADMILLS</li>
                <li>CHANGING ROOMS FOR BOTH MEN/WOMEN</li>
                <li>SITTING AREA FOR FRIENDS AND FAMILY</li>
              </ul>
            </td></tr></tbody></table>
            <h3 className="primary">Gallery</h3>
            <div className="gallery" id="gallery">
              <div>
                <a msk-selectable-link="default" href="#gallery" onClick={this.getClickHandler(bags)} title="Bags">
                  <img src={bagsT} alt=""/>
                </a>
                Bags
              </div>
              <div>
                <a msk-selectable-link="" href="#gallery" onClick={this.getClickHandler(cage)} title="Cage">
                  <img src={cageT} alt=""/>
                </a>
                Cage
              </div>
              <div>
                <a msk-selectable-link="" href="#gallery" onClick={this.getClickHandler(mirror)} title="Layout">
                  <img src={mirrorT} alt=""/>
                </a>
                Layout
              </div>
              <div>
                <a msk-selectable-link="" href="#gallery" onClick={this.getClickHandler(ring)} title="Ring">
                  <img src={ringT} alt=""/>
                </a>
                Ring
              </div>
              <div>
                <a msk-selectable-link="" href="#gallery" onClick={this.getClickHandler(uppercut)}  title="Uppercut Bags">
                  <img src={uppercutT} alt=""/>
                </a>
                Uppercut Bags
              </div>
              { bigImage && <img src={bigImage} alt=""/> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
