import React, { Component } from 'react';
import { getGroupSortedByDay } from '../../services/siteData';
import './ScheduleByDay.css';

class ScheduleByDay extends Component {
  render() {
    const sorted = getGroupSortedByDay();
    return (
      <div className="ScheduleByDay group sortedByDay">
        {sorted.map(group => group ? this.renderGroup(group) : '')}
      </div>
    );
  }
  renderGroup(group) {
    const name = group[0].day.name;
    return (
      <div className="group sortedByDay" key={name}>
        <div className="title linkGreen">
          {name}
        </div>
        {group.map(this.renderItem)}
      </div>
    );
  }
  renderItem(item, index) {
    return (
      <div className="section" key={index}>
        <span className="col1">
          {item.time.start} - {item.time.end}
        </span>
        <span className="col2">
          <a href={`#${item.c}`}>
            {item.info.title}
          </a><br/>
          {item.desc ? <i className="desc">{item.desc}</i> : ''}
        </span>
      </div>
    );
  }
}

export default ScheduleByDay;
