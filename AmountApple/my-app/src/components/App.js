import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    console.log('constructor');
  }
  state = {
    count:0
  }
  onChange = (e) => {
    this.setState({
      count: e.target.value*1
    });
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.count === 0 ? false: true;
  }
  render() {
    console.log('render');
    return (
      <div className="App">
      <h1>Calculate apple amount</h1>
      <span>1 apple  = 1 TL</span><br/>
      <input onChange={this.onChange} type="number" placeholder="please enter the count of apples"/>
        <div>Amount you need to pay = {this.state.count} TL</div>
      </div>
    );
  }
}

export default App;
