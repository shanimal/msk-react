import React, { Component } from 'react';
import { classes } from '../../services/siteData';

class ClassList extends Component {
  render() {
    return (
      <div className="info_wrapper">
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
        <div className="p1">
          <a name={cls.c} id={cls.c}></a>
          <h2 className="secondary">{cls.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: cls.detail }} />
        </div>
      );
    }
  }
}

export default ClassList;
