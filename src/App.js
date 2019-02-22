import React, { Component } from 'react';
import './App.css';
const SpeechRecognition = window.SpeechRecognition
const webkitSpeechRecognition = window.webkitSpeechRecognition

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {newCost: 0, budget: 0, total: 0}
    this.add = this.add.bind(this);
    this.getBudget = this.getBudget.bind(this);
    this.listen = this.listen.bind(this);
    this.clear = this.clear.bind(this);
  }

  add(newCost) {

    this.setState({newCost: newCost, total: parseInt(this.state.total) + parseInt(newCost)})
    console.log(this.state.total);

  }

  getBudget(e) {
    this.setState({budget: e.target.value})
  }

  listen() {
    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    let recognition = new SpeechRecognition();
    let results;
    let app = this;

    recognition.start();

    recognition.onresult = function(e) {
      results = e.results[0][0].transcript;
      results = results.replace(/[^0-9]/, '');
      app.setState({total: parseInt(results)});
    }
  }

  clear() {
    this.setState({total: 0});
  }

  render() {
    return (
      <div className="App">
        <input type='number' onChange={this.getBudget}/>
        <h2>{this.state.budget}</h2>
        <div className='calculator' id='wrong'>
          <div className='button' onClick= {this.add.bind(null, '1')}>
            <p>1</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '2')}>
            <p>2</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '5')}>
            <p>5</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '10')}>
            <p>10</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '20')}>
            <p>20</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '50')}>
            <p>50</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '100')}>
            <p>100</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '200')}>
            <p>200</p>
          </div>
          <div className='button' onClick= {this.add.bind(null, '500')}>
            <p>500</p>
          </div>
        </div>
        <h2>{this.state.total}</h2>
        <button onClick={this.listen}>Microphone</button>
        <button onClick={this.clear}>Add</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default App;
