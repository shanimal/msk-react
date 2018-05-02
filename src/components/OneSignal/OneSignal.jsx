import React, { Component } from 'react';
import './OneSignal.css';

class OneSignalComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSupported: false,   // does the browser support push notifications
      isOptedOut: false,    // is the user opted out of push notifications
      isPushEnabled: false, // has the user subscribed
    };
    this.handleSubscriptionClick = this.handleSubscriptionClick.bind(this);
    this.onSubscriptionChange = this.onSubscriptionChange.bind(this);
  }

  componentWillMount() {
    const OneSignal = window.OneSignal;
    const hasOneSignal = OneSignal && OneSignal.on;
    hasOneSignal && OneSignal.on('subscriptionChange', this.onSubscriptionChange);
    hasOneSignal && this.getSubscriptionState().then(state => this.setState({ ...state }))
  }

  componentWillUnmount() {
    const OneSignal = window.OneSignal;
    OneSignal && OneSignal.off && OneSignal.off('subscriptionChange', this.onSubscriptionChange);
  }

  getSubscriptionState() {
    const OneSignal = window.OneSignal;
    return Promise.all([
      OneSignal.isPushNotificationsEnabled(),
      OneSignal.isOptedOut(),
      OneSignal.isPushNotificationsSupported(),
    ])
      .then(result => ({
        isPushEnabled: result[0],
        isOptedOut: result[1],
        isSupported: result[2],
      }));
  }

  handleSubscriptionClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const OneSignal = window.OneSignal;
    this.getSubscriptionState().then(state => {
      if (state.isPushEnabled || state.isOptedOut) {
        // already registered
        OneSignal.setSubscription(state.isOptedOut).then(state => {
          OneSignal.emit('subscriptionChange');
        });
      } else {
        // not registered
        OneSignal.registerForPushNotifications();
      }
    });
  }

  onSubscriptionChange() {
    this.getSubscriptionState().then(state => {
      this.setState(state);
    });
  }

  render() {
    if(this.state.isSupported) {
      return (
        <button
          className="OneSignal"
          href="/"
          id="my-notification-button"
          onClick={this.handleSubscriptionClick}
        >
          {
            this.state.isOptedOut
            ? (this.props.subscribeText || 'Subscribe')
            : (this.props.unsubscribeText || 'Unsubscribe')
          }
        </button>
      );
    }
    return null;
  }
}

export default OneSignalComponent;
