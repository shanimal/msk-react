import React, { Component } from 'react';
import { getGroupSortedByTime } from '../../services/siteData';
import './ScheduleByTime.css';

class ScheduleByTime extends Component {
  render() {
    const sorted = getGroupSortedByTime();
    return (
      <div class="group sortedByTime">
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
      <div class="section">
        <span class="col1">{item.day.name}</span>
        <span className="col2">
          Until {item.time.end}
        </span>
        <span class="col3">
          <a href={`#${item.c}`}>
            {item.info.title}
          </a>
        </span>
        <span class="col4">{item.desc ? `(${item.desc})` : ''}</span>
      </div>
    );
  }
}

export default ScheduleByTime;
