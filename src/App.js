import React, { Component } from 'react';
import Board from './components/Board.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Connect Four</h2>
        <div className="Game">
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default App;
