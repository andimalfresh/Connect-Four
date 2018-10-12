import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';

class App extends Component {
  state = {
    turnCount = 0,
    winLength = 4,
  }





  render() {
    return (
      <>
        <div class='container bodyCont'>
          <div class='container mainCont'>
            <Header />
            <Board />
          </div>
        </div>

      </>

    );
  }
}

export default App;
