import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export class App extends Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
