import React, { Component } from 'react';
import { getGroupSortedByTime } from 'services/siteData';
import './ScheduleByTime.css';

class ScheduleByTime extends Component {
  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
    this.renderIndex = this.renderIndex.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }
  render() {
    const sorted = getGroupSortedByTime();
    return (
      <div className="ScheduleByTime group sortedByTime">
        <div className="index">
          {sorted.map(this.renderIndex)}
        </div>
        {sorted.map(group => this.renderGroup(group))}
      </div>
    );
  }
  renderGroup(group) {
    const anchor = `t${group[0].s}`;
    return (
      <div className="group sortedByTime" key={group[0].time.start} id={anchor}>
        <div className="title linkGreen">
          {group[0].time.start}
        </div>
        {group.map(this.renderItems)}
      </div>
    );
  }
  renderIndex(group) {
    if (!group) {
      return '';
    }
    const label = group[0].time.start;
    const anchor = `t${group[0].s}`;
    return <a href={`#${anchor}`} key={anchor}>{label}</a>;
  }
  renderItems(item, index) {
    return (
      <div className="section" key={index}>
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
