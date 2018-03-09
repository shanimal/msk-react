import React, { Component } from 'react';
import './Contact.css';

class Page extends Component {
  render() {
    return (
      <div className="Contact main">
        <div className="middle">
          <h1 className="siteFont secondary">Contact</h1>
          <div className="blackBox">
            <div className="contact">
              <h2>Hollister</h2>
              <p><b className="primary">Main Street Kickboxing</b><br/>
                401 Hillcrest Rd. Unit D<br/>
                Hollister, CA 95023<br/>
              </p>
              <p><b className="primary">Phones</b><br/>
                <b>Tel.</b> 831-638-1077
              </p>
              <p><b className="primary">Email</b><br/>
                <a href="mailto:Danny@MainStreetKickboxing.com">Danny@MainStreetKickboxing.com</a><br/>
                <a href="mailto:Ralph@MainStreetKickboxing.com">Ralph@MainStreetKickboxing.com</a><br/>
              </p>
              <div className="map">
                <a target="_blank" href="http://goo.gl/maps/ohvjr" rel="noopener noreferrer">
                  <img
                    alt="View on maps"
                    title="Click to view larger map"
                    className="gmap"
                    src="http://maps.google.com/maps/api/staticmap?center=36.84753615757422,-121.39131474501482&amp;zoom=16&amp;markers=icon:http%3A%2F%2Fmsk.shanimal.com%2F_img%2Flogo_map.png%3F4|36.84753615757422,-121.39131474501482&amp;size=500x500&amp;sensor=false"

                  /><br/>
                    View larger map
                </a><br/>
                <a target="_blank" href="http://goo.gl/maps/ohvjr" rel="noopener noreferrer">Get Directions</a>
              </div>
            </div>
          </div></div>
      </div>
    );
  }
}

export default Page;
