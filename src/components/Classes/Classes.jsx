import React, { Component } from 'react';
import NextClass from './NextClass';
import Schedule from './Schedule';
import ClassList from './ClassList';
import { getNextClass } from '../../services/siteData'

class Classes extends Component {

  componentDidMount() {
    getNextClass();
  }
  render() {
    return (
      <div>
        <div className="middle">
          <a name="top" id="top"> </a>
          <h1 className="siteFont secondary">Classes</h1>
          <div className="blackBox">
            <NextClass />
            <Schedule />
            <ClassList />
          </div>
        </div>
      </div>
    )
  };
};

export default Classes;

/**
 <div className="info_wrapper" id="interactive">
 <h2 className="linkBlue">Schedule</h2>
 <div className={`scheduleSort ${nextClass.sortClass}`}>
 <a className="sortName" onClick="applyScheduleSort('c')">name</a> |
 <a className="sortTime" onClick="applyScheduleSort('t')">time</a> |
 <a className="sortDays" onClick="applyScheduleSort('d')">day</a>
 </div>
 { schedule.sort(sorterFunction).map(group => {
   console.log('GROUP', group);
   return (
     <div className={`group ${group[0].sortClass}`}>
       <div className="title secondary" >
         <a href={`#${group[0].code}`}>{group[0].groupTitle}</a>
       </div>
       {group.map((slot) => {
         return (
           <div className="section">
             <span className="col1">{slot.col1}</span>
             <span className="col2"><a href={`#${slot.code}`}>{slot.col2}</a></span>
             <span className="col3">{slot.col3}</span>
             <span className="col4">{slot.col4}</span>
           </div>
         );
       })}
     </div>
   );
 }) }
 <div className="info_wrapper">
 <h2 className="linkBlue">Pricing</h2>
 <table className="info">
 <tr className="section">
 <th colSpan="3" className="title">Enrollment</th>
 </tr>
 <tr>
 <td className="title"><a href="#ko">Kids Kickboxing</a></td>
 <td className="time">includes starter pack*</td>
 <td className="time">100</td>
 </tr>
 <tr>
 <td className="title"><a href="#mt">Muay Thai/ Boxing</a></td>
 <td className="time">&nbsp;</td>
 <td className="time">100</td>
 </tr>
 <tr>
 <td className="title"><a href="#ct">Core Fitness</a></td>
 <td className="time">&nbsp;</td>
 <td className="time">100</td>
 </tr>
 <tr>
 <td colSpan="3">&nbsp;</td>
 </tr>
 <tr>
 <td className="title"><a href="#sf">Super Seniors</a></td>
 <td colSpan="2" className="time superseniors">Inquire About the "Super Senior Deal"</td>
 </tr>
 <tr className="section">
 <th colSpan="3" className="title">Monthly</th>
 </tr>
 <tr>
 <td className="title"><a href="#ko">Kids Kickboxing</a></td>
 <td className="time">&nbsp;</td>
 <td className="time">75</td>
 </tr>
 <tr>
 <td className="title"><a href="#ct">Core Fitness</a></td>
 <td className="time">all inclusive**</td>
 <td className="time">125</td>
 </tr>
 <tr>
 <td className="title">
 <a href="#sf">Super Seniors</a>
 </td>
 <td colSpan="2" className="time superseniors">
 Inquire About the "Super Senior Deal"
 </td>
 </tr>
 <tr>
 <td colSpan="3">
 <p className="fineprint">
 * Gloves, hand wraps, and t-shirt.<br/>
 ** Includes all classes for enrolled individual<br/>
 Family and senior discounts.<br/>
 Please inquire.
 </p>
 </td>
 </tr>
 </table>
 </div>
 </div>
 */