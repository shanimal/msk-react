import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Menu.css';
import menuItems from '../../services/menu';

class Menu extends Component {

  getChangeHandler(tabId) {
    return (e) => {
      this.props.onChange(e, tabId);
    }
  }

  render() {
    const { currentTab } = this.props;
    return <div className="Menu">
      <div className="bar">
        { menuItems.map((tab) => {
          const active = currentTab === tab.id;
          return (
            <Link className={`${tab.id} tab ${active ? 'active' : ''}`} to={`/${tab.id}`} key={tab.id} onClick={this.getChangeHandler(tab.id)}>
              {tab.label}
              <div className="indicator"></div>
            </Link>
          );
        })}
      </div>
    </div>
  }
}

export default Menu;