import React, { Component } from 'react';
import { getSortedSchedule } from '../../services/siteData';
import ScheduleByDay from './ScheduleByDay';
import ScheduleByName from './ScheduleByTitle';
import ScheduleByTime from './ScheduleByTime';
import './Schedule.css';

const sorts = [
  {name: 'Day of Week', component: ScheduleByDay},
  {name: 'Class Name', component: ScheduleByName},
  {name: 'Start Time', component: ScheduleByTime},
];

class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = { sort: sorts[0] }
  }
  getSortHandler(sort) {
    return e => {
      this.setState({ sort });
    }
  }
  render() {
    const Component = this.state.sort.component;
    return (
      <div className="Schedule">
        <div className="middle">
          <a name="top" id="top"> </a>
          <h2 className="primary">Schedule</h2>
          <div className="scheduleSort sortedByDay">
            {sorts.reduce((accu, sort) => {
              accu.push(<a className={`secondary ${sort === this.state.sort ? 'selected' : ''}`} href={`#${sort.c}`} onClick={this.getSortHandler(sort)}>{sort.name}</a>);
              accu.push(' | ');
              return accu;
            }, []).slice(0,-1)}
          </div>
          <Component />
        </div>
      </div>
    );
  }
}

export default Schedule;
