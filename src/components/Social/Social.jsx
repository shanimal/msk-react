import React, { Component } from 'react';
import './Social.css';
import { Link } from 'react-router-dom';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <iframe title="Facebook" className="fblike" scrolling="no" frameBorder="0" allowtransparency="true" src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fhome.php%23%21%2Fpages%2FMain-Street-Kickboxing-Hollister-Ca%2F121595357867256&amp;layout=button_count&amp;show_faces=false&amp;width=450&amp;action=like&amp;font=trebuchet+ms&amp;colorscheme=light&amp;height=21"></iframe>
        <div className="fbnews siteFont">
          <a ng-href="fbnews" className="primary" href="fbnews">facebook Live News Feed</a>
        </div>
        <div className="action_arrow" />
        <div className="action">
          <a
            className="follow secondary siteFont"
            href="https://www.facebook.com/pages/MSK-Main-Street-Kickboxing/121595357867256"
            rel="noopener noreferrer"
            target="_blank"
          >
            Follow Us
          </a>
          <Link to="/shop" className="shopmsk linkWhite siteFont" href="shop">Shop MSK</Link>
        </div>
        <a
          className="fblink"
          href="http://www.facebook.com/pages/Main-Street-Kickboxing-Hollister-Ca/121595357867256"
          target="_blank" rel="noopener noreferrer"
        > </a>
        <a
          className="ytlink"
          href="http://www.youtube.com/user/mainstreetkickboxing"
          target="_blank" rel="noopener noreferrer"
        > </a>
      </div>
    );
  }
}

export default Social;
