import React, { Component } from 'react';
import './App.css';
import Survey from './Survey/Survey';

class App extends Component {
  state = {
    key: [
      {val1: '1'},
      {val2: '2'}
    ]
  }
  render() {
    return (
      <div className="App">
        <Survey />
      </div>
    );
  }
}

export default App;
