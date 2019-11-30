import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import logo from './MysticSage_logo_black.png';

import HomePage from './pages/homepage/homepage.component';

const JewelryPage = () => (
  <div>
    <h1>Jewelry Page</h1>
  </div>
)

function App() {
  return (
    <div>
    <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/jewelry' component={JewelryPage} />
      </Switch>
    </div>
  );
}

export default App;
