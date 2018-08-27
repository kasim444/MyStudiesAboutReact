import React from 'react';
class Counter extends React.Component{
    state={
        number:0
    };
    increment = () => {
        this.setState({ number: ++this.state.number });
    }
    decrement = () => {
        this.setState({ number:--this.state.number });
    }
    render(){
        return (
            <div>
              <h2>{this.state.number}</h2>
              <button onClick={this.increment}>+</button>
              <button onClick={this.decrement}>-</button>
            </div>);
    }
}
export default Counter; 