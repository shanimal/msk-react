import React, { Component } from 'react';
import NextClass from './NextClass';
import Schedule from './Schedule';
import Pricing from './Pricing';
import ClassList from './ClassList';
import { getNextClass } from '../../services/siteData'
import './Classes.css';

class Classes extends Component {

  componentDidMount() {
    getNextClass();
  }
  render() {
    return (
      <div className="Classes main">
        <div className="middle">
          <a name="top" id="top"> </a>
          <h1 className="siteFont secondary">Classes</h1>
          <div className="blackBox">
            <NextClass />
            <Schedule />
            <Pricing />
            <ClassList />
          </div>
        </div>
      </div>
    )
  };
};

export default Classes;
