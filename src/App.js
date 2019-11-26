import React from 'react';
import './App.css';
import logo from './MysticSage_logo_black.png';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
    <img src={logo} className="App-logo" alt="logo" />
    <HomePage />
    </div>
  );
}

export default App;
