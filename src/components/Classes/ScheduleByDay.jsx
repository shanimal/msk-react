import React, { Component } from 'react';
import { getGroupSortedByDay } from '../../services/siteData';
import './ScheduleByDay.css';

class ScheduleByDay extends Component {
  render() {
    const sorted = getGroupSortedByDay();
    return (
      <div className="ScheduleByDay group sortedByDay">
        <div className="index">
        {sorted.map(ScheduleByDay.renderIndex)}
        </div>
        {sorted.map(ScheduleByDay.renderGroup)}
      </div>
    );
  }
  static renderGroup(group) {
    if (!group) {
      return '';
    }
    const name = group[0].day.name;
    const anchor = group[0].day.abbr.replace(' ', '');
    return (
      <div className="group sortedByDay" key={name} id={anchor}>
        <div className="title linkGreen">
          {name}
        </div>
        {group.map(ScheduleByDay.renderItems)}
      </div>
    );
  }
  static renderIndex(group) {
    if (!group) {
      return '';
    }
    const abbr = group[0].day.name;
    const anchor = group[0].day.abbr.replace(' ', '');
    return <a key={abbr} href={`#${anchor}`}>{abbr}</a>;
  }
  static renderItems(item, index) {
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
