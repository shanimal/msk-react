import React, { Component } from 'react';
import { getGroupSortedByTitle } from '../../services/siteData';
import './ScheduleByTitle.css';

class ScheduleByTitle extends Component {
  render() {
    const sorted = getGroupSortedByTitle();
    return (
      <div className="ScheduleByTitle group sortedByTitle">
        <div className="index">
          {sorted.map(this.renderIndex)}
        </div>
        {sorted.map(group => this.renderGroup(group))}
      </div>
    );
  }
  renderGroup(group, index) {
    const anchor = group[0].info.title.replace(' ', '');
    const title = group[0].info.title;
    return (
      <div className="group sortedByTitle" key={anchor} id={anchor}>
        <div className="title linkGreen">
          <a href="#bc">{title}</a>
        </div>
        {group.map(this.renderItem)}
      </div>
    );
  }
  renderIndex(group) {
    if (!group) {
      return '';
    }
    const label = group[0].info.title;
    const anchor = group[0].info.title.replace(' ', '');
    return <a href={`#${anchor}`} key={anchor}>{label}</a>;
  }
  renderItem(item, index){
    return (
      <div className="section" key={index}>
        <span className="col1">{item.day.name}</span>
        <span className="col2">
          {item.time.start} - {item.time.end}
        </span>
        <span className="col3">{item.desc ? <span className="desc">{item.desc}</span> : ''}</span>
      </div>
    );
  }
}

export default ScheduleByTitle;
