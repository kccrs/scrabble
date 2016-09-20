import React, { Component } from 'react';
import scoreWords from '../scoreWords';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      score: 0,
      previousWords: []
    };
  }

  calculateScore(e) {
    this.setState({ word: e.target.value });
    this.setState({ score: scoreWords(e.target.value) });
  }

  clearFields() {
    this.setState({ word: ''});
    this.setState({ score: 0 });
  }



  submitScore() {
    this.setState({ previousWords: this.state.previousWords.concat(this.state.word)});
  }

  render() {
    return (
      <section className="WordInput">
        <label>
          Word Choice
          <input
            className="WordChoice"
            onChange={(e) => this.calculateScore(e)}
            type="text"
            value={this.state.word}/>
        </label>
        <p>Score: {this.state.score}</p>
        <label>
          <button
            type="submit"
            className="SubmitChoice"
            onClick={() => this.submitScore()}>
            Submit
          </button>
        </label>
        <label>
          <button
            type="submit"
            className="ClearButton"
            onClick={() => this.clearFields()}
            >
            Clear
          </button>
        </label>
      </section>
    );
  }
}
