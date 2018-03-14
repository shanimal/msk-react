import React, { Component } from 'react';
import { getNextClass } from '../../services/siteData';
import './NextClass.css';

class NextClass extends Component {
  render() {
    const nextClass = getNextClass();
    return (
      <div className="NextClass">
        <h2 className="primary">
          <span className="nowrap">Next Class: {' '}</span>
          <span className="nowrap">
          {nextClass.isTomorrow && <span>Tomorrow</span>}
          {nextClass.isToday && <span>Today</span>}
          {
            (nextClass.isTomorrow || nextClass.isToday)
              ? ''
              : <span>1/26</span>
          }
          {' '}4:00-5:00p
          </span>
        </h2>
        <div className="group sortedByDay nextClass">
          <h3 className="secondary">{nextClass.info.title}</h3>
          <div className="desc">{nextClass.info.detail}</div>
          <div className="section">
            {nextClass.day.name}
            <span className="col1">{nextClass.time.start} - {nextClass.time.end}</span>
            <span className="col2">
              <a href={`#${nextClass.c}`}>{nextClass.info.title}</a>
            </span>
            <span className="col3">{nextClass.desc}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NextClass;