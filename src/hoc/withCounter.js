import React, { Component } from 'react';

const HigherOrderComponent = (WrappedComponent) => {
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
      const { counter } = this.state;
      return (<WrappedComponent counter={counter} incrementCount={this.incrementCount} />);
    }
  }
  return EnhancedComponent;
};

export default HigherOrderComponent;
