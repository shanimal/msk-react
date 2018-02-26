import React, { Component } from 'react';
import { getGroupSortedByDay } from '../../services/siteData';
import './ScheduleByDay.css';

class ScheduleByDay extends Component {
  render() {
    const sorted = getGroupSortedByDay();
    return (
      <div className="group sortedByDay">
        {sorted.map(group => group ? this.renderGroup(group) : '')}
      </div>
    );
  }
  renderGroup(group) {
    return (
      <div className="group sortedByDay">
        <div className="title linkGreen">
          {group[0].day.name}
        </div>
        {group.map(this.renderItem)}
      </div>
    );
  }
  renderItem(item, index) {
    return (
      <div className="section">
        <span className="col2">
          {item.time.start} - {item.time.end}
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

export default ScheduleByDay;
