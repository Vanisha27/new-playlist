import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = 'orange';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregrate extends Component {
  render() {
    return (
      <div style= {{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type = "text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "15%" }}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song1</li>
          <li>Song2</li>
          <li>Song3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>  
        <Aggregrate/>
        <Aggregrate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
