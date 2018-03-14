import React from 'react';
import './Pricing.css';

// todo: use flexbox instead of a table
const Pricing = () => (
  <div className="Pricing info_wrapper">
    <h2 className="primary">Pricing</h2>
    <div className="info">

      <div className="section">Enrollment</div>
      <div>
        <div className="title"><a href="#ct" target="_self">Core Fitness</a></div>
        <div className="time"></div>
        <div className="cost">50</div>
      </div>
      <div>
        <div className="title"><a href="#ko" target="_self">Kids Kickboxing</a></div>
        <div className="time">includes starter pack*</div>
        <div className="cost">100</div>
      </div>
      <div>
        <div className="title"><a href="#sb" target="_self">MMA</a></div>
        <div className="time"></div>
        <div className="cost">100</div>
      </div>
      <div>
        <div className="title"><a href="#mt" target="_self">Muay Thai/ Boxing</a></div>
        <div className="time"></div>
        <div className="cost">100</div>
      </div>
      <div className="full">
        <div className="title"><a href="#sf" target="_self">Super Seniors</a></div>
        <div className="time superseniors">Inquire About the "Super Senior Deal"</div>
      </div>


      <div className="section">Monthly</div>
      <div>
        <div className="title"><a href="#ct" target="_self">Core Fitness</a></div>
        <div className="time">all inclusive**</div>
        <div className="cost">75</div>
      </div>
      <div>
        <div className="title"><a href="#ko" target="_self">Kids Kickboxing</a></div>
        <div className="time"></div>
        <div className="cost">100</div>
      </div>
      <div>
        <div className="title"><a href="#sb" target="_self">MMA</a></div>
        <div className="time"></div>
        <div className="cost">150</div>
      </div>
      <div>
        <div className="title"><a href="#sb" target="_self">Muay Thai/ Boxing</a></div>
        <div className="time"></div>
        <div className="cost">100</div>
      </div>
      <div className="full">
        <div className="title"><a href="#sf" target="_self">Super Seniors</a></div>
        <div className="time superseniors">Inquire About the "Super Senior Deal"</div>
      </div>

      <div className="full">
        <p className="fineprint">
          * Gloves, hand wraps, and t-shirt.<br/>
          ** Includes all classes for enrolled individual<br/>
          Family and senior discounts.<br/>
          Please inquire.
        </p>
      </div>

    </div>
  </div>
);

export default Pricing;