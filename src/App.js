import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Joke from "./Joke";
import joksData from "./JokesData";

class App extends Component {
  render() {
     const jokes = joksData.filter(joke=>joke.id===1).map(joke=> <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card data={{name:"test"}}/>
          {jokes}

      </div>
    );
  }
}

export default App;
