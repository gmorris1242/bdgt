import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {newCost: 0, budget: 0, total: 0}
    this.add = this.add.bind(this);
    this.getBudget = this.getBudget.bind(this);
  }

  add(newCost) {

    this.setState({newCost: newCost, total: parseInt(this.state.total) + parseInt(newCost)})
    console.log(this.state.total);

  }

  getBudget(e) {
    this.setState({budget: e.target.value})
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
      </div>
    );
  }
}

export default App;
