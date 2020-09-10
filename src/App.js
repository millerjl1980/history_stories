import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';

const ITEMS_URL = "http://apitest.historyit.com/example.php";

class App extends Component {
  
  state = {
    items: []
  };

  componentDidMount() {
    fetch(ITEMS_URL)
      .then(res => res.json())
      .then(items => {
        this.setState({ items })
      });
  };

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default App;
