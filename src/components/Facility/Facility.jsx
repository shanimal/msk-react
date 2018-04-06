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
      bigImage: bags,
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
      <div className="Facility main">
        <h1 className="siteFont secondary">Facility</h1>
        <div className="middle" ng-view="" autoscroll="">
          <div className="blackBox ng-scope" ng-controller="FacilityCtrl">
            <h2 className="primary">Features</h2>
            <div className="featureList">
              <div>5,000 SQ FT. FULLY MIRRORED AND MATTED TRAINING AREA</div>
              <div>FULL SIZE BOXING RING</div>
              <div>20ft MMA CAGE</div>
              <div>14 BANANA BAGS</div>
              <div>4 WALL MOUNTED UPPER CUT/CLINCH BAGS</div>

              <div>2 SPEED BAGS</div>
              <div>WEIGHT LIFTING AREA</div>
              <div>3 COMMERCIAL TREADMILLS</div>
              <div>CHANGING ROOMS FOR BOTH MEN/WOMEN</div>
              <div>SITTING AREA FOR FRIENDS AND FAMILY</div>
            </div>
            <h2 className="primary">Gallery</h2>
            <div className="gallery" id="gallery">
              <div>
                <a href="#gallery" onClick={this.getClickHandler(bags)} title="Bags">
                  <img src={bagsT} alt=""/>
                </a>
                <span className="desktop-only">Bags</span>
              </div>
              <div>
                <a href="#gallery" onClick={this.getClickHandler(cage)} title="Cage">
                  <img src={cageT} alt=""/>
                </a>
                <span className="desktop-only">Cage</span>
              </div>
              <div>
                <a href="#gallery" onClick={this.getClickHandler(mirror)} title="Layout">
                  <img src={mirrorT} alt=""/>
                </a>
                <span className="desktop-only">Layout</span>
              </div>
              <div>
                <a href="#gallery" onClick={this.getClickHandler(ring)} title="Ring">
                  <img src={ringT} alt=""/>
                </a>
                <span className="desktop-only">Ring</span>
              </div>
              <div>
                <a href="#gallery" onClick={this.getClickHandler(uppercut)}  title="Uppercut Bags">
                  <img src={uppercutT} alt=""/>
                </a>
                <span className="desktop-only">Uppercut Bags</span>
              </div>
              { bigImage && <img src={bigImage} className="bigImage" alt=""/> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
