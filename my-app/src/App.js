import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// sqaure size = 32px

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {board:[["bR","bN","bB","bQ","bK","bB","bN","bR"],
      ["bp","bp","bp","bp","bp","bp","bp","bp"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["wp","wp","wp","wp","wp","wp","wp","wp"],
      ["wR","wN","wB","wQ","wK","wB","wN","wR"]]}
  }

  change_res(){
    return -1
  }

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/AD3MbBi.jpeg" alt="picture of cat" width='150' height='150' />
        <button onClick={null}>work pls</button>
      </header>
      <body>
      <div className='column8'>
        <button id='a8' className="White"></button>
        <button id='b8' className="Black"></button>
        <button id='c8' className="White"></button>
        <button id='d8' className="Black"></button>
        <button id='e8' className="White"></button>
        <button id='f8' className="Black"></button>
        <button id='g8' className="White"></button>
        <button id='h8' className="Black"></button>
      </div>
      <div className='column7'>
        <button id='a7' className="Black"></button>
        <button id='b7' className="White"></button>
        <button id='c7' className="Black"></button>
        <button id='d7' className="White"></button>
        <button id='e7' className="Black"></button>
        <button id='f7' className="White"></button>
        <button id='g7' className="Black"></button>
        <button id='h7' className="White"></button>
      </div>
      <div className='column6'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      <div className='column5'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      <div className='column4'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      <div className='column3'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      <div className='column2'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      <div className='column1'>
        <button id='a7' className="White"></button>
        <button id='b7' className="Black"></button>
        <button id='c7' className="White"></button>
        <button id='d7' className="Black"></button>
        <button id='e7' className="White"></button>
        <button id='f7' className="Black"></button>
        <button id='g7' className="White"></button>
        <button id='h7' className="Black"></button>
      </div>
      </body>
    </div>
    )
  }
}

export default App;
