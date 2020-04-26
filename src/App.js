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
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
