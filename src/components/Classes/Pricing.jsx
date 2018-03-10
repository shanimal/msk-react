import React from 'react';
import './Pricing.css';

// todo: use flexbox instead of a table
const Pricing = () => (
  <div className="Pricing info_wrapper">
    <h2 className="primary">Pricing</h2>
    <table className="info">
      <tbody>
      <tr className="section">
        <th colSpan="3" className="title">Enrollment</th>
      </tr>
      <tr>
        <td className="title"><a href="#ct" target="_self">Core Fitness</a></td>
        <td className="time">&nbsp;</td>
        <td className="cost">50</td>
      </tr>
      <tr>
        <td className="title"><a href="#ko" target="_self">Kids Kickboxing</a></td>
        <td className="time">includes starter pack*</td>
        <td className="cost">100</td>
      </tr>
      <tr>
        <td className="title"><a href="#sb" target="_self">MMA</a></td>
        <td className="time">&nbsp;</td>
        <td className="cost">100</td>
      </tr>
      <tr>
        <td className="title"><a href="#mt" target="_self">Muay Thai/ Boxing</a></td>
        <td className="time">&nbsp;</td>
        <td className="cost">100</td>
      </tr>
       <tr>
        <td className="title"><a href="#sf" target="_self">Super Seniors</a></td>
        <td colSpan="2" className="time superseniors">Inquire About the "Super Senior Deal"</td>
      </tr>
      <tr className="section">
        <th colSpan="3" className="title">Monthly</th>
      </tr>
      <tr>
        <td className="title"><a href="#ct" target="_self">Core Fitness</a></td>
        <td className="time">all inclusive**</td>
        <td className="cost">75</td>
      </tr>
      <tr>
        <td className="title"><a href="#ko" target="_self">Kids Kickboxing</a></td>
        <td className="time">&nbsp;</td>
        <td className="cost">100</td>
      </tr>
      <tr>
        <td className="title"><a href="#sb" target="_self">MMA</a></td>
        <td className="time"></td>
        <td className="cost">150</td>
      </tr>
      <tr>
        <td className="title"><a href="#sb" target="_self">Muay Thai/ Boxing</a></td>
        <td className="time"></td>
        <td className="cost">100</td>
      </tr>
      <tr>
        <td className="title"><a href="#sf" target="_self">Super Seniors</a></td>
        <td colSpan="2" className="time superseniors">Inquire About the "Super Senior Deal"</td>
      </tr>
      <tr>
        <td colSpan="3">&nbsp;</td>
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
      </tbody></table>
  </div>
);

export default Pricing;