import React, { Component } from 'react';
import Header from "./Components/Header/Header.js";

import BurgerControls from "./Components/Burger/BurgerControls/BurgerControls.js"
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />    
        <BurgerControls />
      </div>
    );
  }
}

export default App;
