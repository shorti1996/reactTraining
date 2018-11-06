import React, { Component } from 'react';
import './App.scss';
import SaladMaker from './views/SaladMaker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SaladMaker />
      </div>
    );
  };
};

export default App;
