import React, { Component } from 'react';
import { getGroupSortedByDay } from '../../services/siteData';
import './ScheduleByDay.css';

class ScheduleByDay extends Component {
  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
    this.renderIndex = this.renderIndex.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }
  render() {
    const sorted = getGroupSortedByDay();
    return (
      <div className="ScheduleByDay group sortedByDay">
        <div className="index">
        {sorted.map(this.renderIndex)}
        </div>
        {sorted.map(this.renderGroup)}
      </div>
    );
  }
  renderGroup(group) {
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
        {group.map(this.renderItems)}
      </div>
    );
  }
  renderIndex(group) {
    if (!group) {
      return '';
    }
    const abbr = group[0].day.name;
    const anchor = group[0].day.abbr.replace(' ', '');
    return <a href={`#${anchor}`}>{abbr}</a>;
  }
  renderItems(item, index) {
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
