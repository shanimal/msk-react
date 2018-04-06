import React, { Component } from 'react';
import { getNextClass } from '../../services/siteData';
import './NextClass.css';

class NextClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setCurrentTime = this.setCurrentTime.bind(this)
  }
  componentDidMount() {
    this.setCurrentTime();
    setInterval(this.setCurrentTime, 1000);
  }
  setCurrentTime(){
    const date = new Date();
    const locale = 'en-US';
    const currentDate = date.toLocaleDateString(locale);
    const currentTime = date.toLocaleTimeString(locale);
    this.setState({
      currentDate,
      currentTime,
    });
  }
  render() {
    const nextClass = getNextClass();
    return (
      <div className="NextClass">
        <h2 className="primary">
          <span className="nowrap">Next Class:</span>
          <span className="nowrap">
          {
            (nextClass.isTomorrow && <span>Tomorrow</span>) ||
            (nextClass.isToday && <span>Today</span>) ||
            (<span>{nextClass.day.name}</span>)
          }
          </span>
        </h2>
        <div className="group sortedByDay nextClass">
          <h3 className="secondary">{nextClass.info.title}</h3>
          <div className="desc">{nextClass.info.detail}</div>
          <div className="section">
            <span className="col1">{nextClass.day.name}</span>
            <span className="col2">{nextClass.time.start} - {nextClass.time.end}</span>
            <span
              className="col3"
              before={nextClass.desc ? '(' : ''}
              after={nextClass.desc ? ')' : ''}
            >
              {nextClass.desc}
            </span>
            <span className="col4">Current Time: {this.state.currentDate} {this.state.currentTime}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default NextClass;