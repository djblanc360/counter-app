import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };


  render() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button type="button" className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}



export default Counter;
