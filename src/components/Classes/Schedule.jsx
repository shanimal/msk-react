import React, { Component } from 'react';
import ScheduleByDay from './ScheduleByDay';
import ScheduleByName from './ScheduleByTitle';
import ScheduleByTime from './ScheduleByTime';
import './Schedule.css';

const sorts = [
  {name: 'By Day', component: ScheduleByDay},
  {name: 'By Name', component: ScheduleByName},
  {name: 'By Time', component: ScheduleByTime},
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
          <a name="top" id="schedule"> </a>
          <h2 className="primary">Schedule</h2>
          <div className="scheduleSort sortedByDay">
            {sorts.reduce((accu, sort, index) => {
              accu.push(
                <a
                  key={index}
                  className={`secondary ${sort === this.state.sort ? 'selected' : ''}`}
                  href={`#schedule`}
                  onClick={this.getSortHandler(sort)}
                >
                  {sort.name}
                </a>
              );
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
