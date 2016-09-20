import React, { Component } from 'react';
import scoreWords from '../scoreWords';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      totalScore: 0
    };
  }

  submitScore() {
    
  }

  render() {
    return (
      <section className="WordInput">
        <label>
          Word Choice
          <input
            className="WordChoice"
            onChange={(e) => this.setState({ word: e.target.value })}
            type="text" />
        </label>
        <label>
          <button
            type="submit"
            className="SubmitChoice"
            onClick={(e) => this.setState({ word: e.target.value })}>
            Submit
          </button>
        </label>
      </section>
    );
  }
}
