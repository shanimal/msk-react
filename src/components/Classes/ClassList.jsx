import React, { Component } from 'react';
import { classes } from '../../services/siteData';
import './ClassList.css';

class ClassList extends Component {
  render() {
    return (
      <div className="ClassList info_wrapper">
        <h2 id="class_info" className="primary">Class Information</h2>
        <div className="class_info">
          {classes.map(this.renderClass)}
        </div>
      </div>
    );
  }

  renderClass(cls) {
    if (cls.live) {
      return (
        <div className="p1" key={cls.title}>
          <a name={cls.c} id={cls.c}>&nbsp;</a>
          <h3 className="secondary">{cls.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: cls.detail }} />
          <a className="topLink" href="#class_info">^</a>
        </div>
      );
    }
  }
}

export default ClassList;
