import React, { Component } from 'react';
import { getGroupSortedByTitle } from '../../services/siteData';
import './ScheduleByTitle.css';

class ScheduleByTitle extends Component {
  render() {
    const sorted = getGroupSortedByTitle();
    return (
      <div class="group sortedByTitle">
        {sorted.map(group => this.renderGroup(group))}
      </div>
    );
  }
  renderGroup(group) {
    return (
      <div class="group sortedByTitle">
        <div class="title linkGreen">
          <a href="#bc">{group[0].info.title}</a>
        </div>
        {group.map(this.renderItem)}
      </div>
    );
  }
  renderItem(item, index){
    return (
      <div class="section">
        <span class="col1">{item.day.name}</span>
        <span className="col2">
          {item.time.start} - {item.time.end}
        </span>
        <span class="col4">{item.desc ? `(${item.desc})` : ''}</span>
      </div>
    );
  }
}

export default ScheduleByTitle;
