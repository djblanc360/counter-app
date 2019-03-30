import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this); //will always reference the current counter object
  }

  handleIncrement = (product) => {
    this.setState({count: this.state.count + 1})
  };



  render() {
    console.log('props', this.props.value);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ (product) => this.handleIncrement(product) }
          type="button" className="btn btn-secondary btn-sm"
          >
            Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}



export default Counter;
