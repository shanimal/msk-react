import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import menuItems from './services/menu';
import React, { Component } from 'react';
import FbNews from './components/FBNews/FBNews';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'home',
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }
  handleMenuChange(e, data) {
    this.setState({ currentTab: data });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentTab={this.state.currentTab} onMenuChange={this.handleMenuChange} />
          <div id="content">
            <Switch>
              <Route exact path="/" component={menuItems[0].component}/>
              {menuItems.map(tab => <Route key={tab.id} path={`/${tab.id}`} component={tab.component} />)}
              <Route exact path="/fbnews" component={FbNews}/>
              <Route exact path="/shop" component={Shop}/>
            </Switch>
          </div>
          <Footer className="footer" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
