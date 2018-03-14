import React, { Component } from 'react';
import './FBNews.css';

class Page extends Component {
  render() {
    return (
      <div className="FbNews main">
        <div className="middle">
          <h1 className="siteFont secondary">Facebook News Feed</h1>
          <div className="blackBox">
            <iframe
              allowFullScreen
              allowtransparency="true"
              className="iframe"
              frameBorder="0"
              id="fbnews"
              scrolling="no"
              src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FMSK-Main-Street-Kickboxing-Hollister-Ca%2F121595357867256&amp;colorscheme=dark&amp;show_faces=false&amp;stream=true&amp;header=false&amp;height=900"
              title="fbnews"
              target="_top"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
