import './MailChimp.css';
import React, { Component } from 'react';

class MailChimp extends Component {
  render() {
    return (
      <div id="mc_embed_signup" className="MailChimp">
        <form action="http://mainstreetkickboxing.us7.list-manage2.com/subscribe/post?u=2e2d839175534bd820b6626f9&amp;id=bb92660470" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate ng-pristine ng-valid" target="_blank">
          <label>Enter your email to receive our newsletter. Unsubscribe at any time.</label>
          <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="email address" required="" />
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </form>
      </div>
    );
  }
}

export default MailChimp;
