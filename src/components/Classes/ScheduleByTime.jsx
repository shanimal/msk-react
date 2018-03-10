import React, { Component } from 'react';
import { getGroupSortedByTime } from 'services/siteData';
import './ScheduleByTime.css';

class ScheduleByTime extends Component {
  render() {
    const sorted = getGroupSortedByTime();
    return (
      <div className="ScheduleByTime group sortedByTime">
        {sorted.map(group => this.renderGroup(group))}
      </div>
    );
  }
  renderGroup(group) {
    return (
      <div className="group sortedByTime">
        <div className="title linkGreen">
          {group[0].time.start}
        </div>
        {group.map(this.renderItem)}
      </div>
    );
  }
  renderItem(item) {
    return (
      <div className="section">
        <span className="col1">{item.day.name}</span>
        <span className="col2">
          <a href={`#${item.c}`}>
            {item.info.title}
          </a><br/>
          {item.desc ? <i className="desc">{item.desc}</i> : ''}
        </span>
        <span className="col3">
          Until {item.time.end}
        </span>
      </div>
    );
  }
}

export default ScheduleByTime;
