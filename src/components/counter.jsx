import React, { Component } from 'react';

class Counter extends Component {
  /*
  state = {
    value: this.props.value
  };
  */
  constructor(props) {
    super(props);
    //this.handleIncrement = this.handleIncrement.bind(this); //will always reference the current valueer object
  }

  /*
  handleIncrement = (product) => {
    this.setState({value: this.state.value + 1})
  };
  */


  render() {

    return (

      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount(this.props.value)}</span>
        <button
          onClick={ () => this.props.onIncrement(this.props.value) }
          type="button" className="btn btn-secondary btn-sm"
          >
            Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id) }
          type="button" className="btn btn-danger btn-sm m-2"
          >
            Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount(value) {
    //const { value } = this.props.value;
    return value === 0 ? 'Zero' : value;
  }
}



export default Counter;
